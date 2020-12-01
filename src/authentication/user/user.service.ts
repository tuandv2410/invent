import { HttpException, HttpStatus, Injectable} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create.user.dto';
import * as bcrypt from 'bcrypt';
import { LoginUserDto } from './dto/login.user.dto';
import { AddPermissionsDto } from './dto/add-permissions.dto';
import { AddRoleDto } from './dto/add-role.dto';
import { CheckPermissionDto } from './dto/check-permission.dto';
import { UserEntity } from 'src/entities/authentication/user.entity';
import { RoleService } from '../role/role.service';
import { PermissionService } from '../permission/permission.service';
import { ChangePasswordDto } from './dto/change-password.dto';
import { ChangePasswordResult } from './interfaces/change-password-result.interface';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity)
        private userRepository: Repository<UserEntity>,
        private permissionService: PermissionService,
        private roleService: RoleService,
    ) {}

    async create(createUserDto: CreateUserDto): Promise<UserEntity> {
        const { username, password, email, organization } = createUserDto;
        const user = new UserEntity()

        user.username = username;
        user.salt = await bcrypt.genSalt();
        user.password = await this.hashPassword(password, user.salt);
        user.email = email;
        user.organization = organization;

        try{
            await user.save();
        } catch (error) {
            if (error.code === '23505') {
                throw new HttpException('Username or Email already exists', HttpStatus.CONFLICT);
            } else {
                throw new HttpException('Internal server error', HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }

        return user;
    }

    async getAll(): Promise<UserEntity[]> {
        try{
            const res = await this.userRepository
            .createQueryBuilder("user")
            .leftJoinAndSelect("user.roles","role")
            .leftJoinAndSelect("user.permissions","permission")
            .getMany()
            return res;
        }catch(error) {
            throw new HttpException('Internal server error', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async getById(userId: number): Promise<UserEntity> {
        try{
            const res = await this.userRepository
                .createQueryBuilder("user")
                .leftJoinAndSelect("user.roles","role")
                .leftJoinAndSelect("user.permissions","permission")
                .where("user.id = :uid", { uid: userId})
                .getOne()

            if (!res) {
                throw new HttpException('User not found', HttpStatus.UNAUTHORIZED);
            }
            return res;
        }catch(error) {
            throw new HttpException('Internal server error', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async findByLogin(loginUserDto: LoginUserDto): Promise<UserEntity> {
        const { username, password } = loginUserDto;
        const user = await this.userRepository
            .createQueryBuilder("user")
            .leftJoinAndSelect("user.permissions","permission")
            .where("user.username = :username", { username: username})
            .getOne()
        

        if (!user) {
            throw new HttpException('User not found', HttpStatus.UNAUTHORIZED);
        }

        const areEqual = await user.validatePassword(password);

        if (!areEqual) {
            throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
        }

        return user
    }

    async findByUsername(username: string): Promise<UserEntity> {
        const user = await this.userRepository.findOne({ where: { username } });
        return user;                                     
    }

    async changePassword(changePasswordDto: ChangePasswordDto): Promise<ChangePasswordResult> {
        let status: ChangePasswordResult = {
            succes: true,
            message: 'password change success',
        };
        try {
            const { username, password, newPassword } = changePasswordDto;
            const user = await this.findByLogin({username,password});
            if (!user) {
                throw new HttpException('Wrong password!', HttpStatus.UNAUTHORIZED);
            }
            user.salt = await bcrypt.genSalt();
            user.password = await this.hashPassword(newPassword, user.salt);
            user.save();
        }catch (err) {
            status = {
                succes: false,
                message: err,
            };
        }
        return status;
    }

    async checkPermission(checkPermissionDto: CheckPermissionDto): Promise<Boolean> {
        const { userId, permissionId } = checkPermissionDto;
        const user = await this.userRepository
            .createQueryBuilder("user")
            .leftJoin("user.permissions","permission")
            .where("user.id = :uid AND permission.id = :pid", { uid: userId , pid: permissionId})
            .getOne()
        if(user) return true;
        else return false;
    }


    async addRole(addRoleDto: AddRoleDto): Promise<UserEntity>{
        const { userId, roleId } = addRoleDto;
        const user = await this.userRepository.findOne(userId);
        const role1 = await this.roleService.getById(roleId);
        const role2 = await this.roleService.getByUserId(userId);

        user.roles = [role1,...role2];

        const permission1 = await this.permissionService.getByRoleId(roleId);
        const permission2 = await this.permissionService.getByUserId(userId);

        user.permissions = [...permission1,...permission2];
        await user.save();
        const res = await this.getById(userId);
        return res;
    }

    async addPermissions(addPermissionsDto: AddPermissionsDto): Promise<UserEntity> {
        const { userId, permissionsId } = addPermissionsDto;
        const user = await this.userRepository.findOne(userId);
        const permission1 = await this.permissionService.getMany(permissionsId);
        const permission2 = await this.permissionService.getByUserId(userId);

        user.permissions = [...permission1,...permission2];
        await user.save();
        const res = await this.getById(userId);
        return res;
    }

    private async hashPassword(password: string, salt: string): Promise<string> {
        return bcrypt.hash(password, salt);
    }
}
