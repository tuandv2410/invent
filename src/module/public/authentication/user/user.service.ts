import { HttpException, HttpStatus, Injectable} from '@nestjs/common';
import { UserEntity } from 'src/entities/public/authentication/user.entity';
import { BaseService } from 'src/base/base.service';
import { UserRepository } from './user.repository';
import { PermissionEntity } from 'src/entities/public/authentication/permission.entity';
import { RoleEntity } from 'src/entities/public/authentication/role.entity';
import { LoginUserDto } from '../auth/dto/login.user.dto';
import { ChangePasswordDto } from '../auth/dto/change-password.dto';
import { ResultInterface } from 'src/interfaces/result.interface';
import * as bcrypt from 'bcrypt';
import { FilterGetUserDto } from './dto/filter-get-user.dto';

@Injectable()
export class UserService extends BaseService<UserEntity, UserRepository>{
    constructor(repository: UserRepository) {
        super(repository)
    }

    async login(userData: LoginUserDto): Promise<UserEntity> {
        const { username, password } = userData;

        const user = await this.repository.findOne({username});
        if (!user) {
            throw new HttpException('User not found', HttpStatus.UNAUTHORIZED);
        }
        
        const areEqual = await user.validatePassword(password);

        if (!areEqual) {
            throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
        }

        return user
    }

    async changePassword(userData: ChangePasswordDto): Promise<ResultInterface> {
        let status: ResultInterface = {
            succes: true,
            message: 'password change success',
        };
        try {
            const { username, password, newPassword } = userData;
            const user = await this.login({username,password});
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

    async addRole(
        user: UserEntity, 
        role: RoleEntity
    ) {
        user.roles = [...user.roles,role];
        await user.save();
    }

    async addPermission(
        user: UserEntity, 
        permissions: PermissionEntity[]
    ) {
        user.permissions = [...user.permissions,...permissions];
        await user.save();
    }

    async hashPassword(password: string, salt: string): Promise<string> {
        return bcrypt.hash(password, salt);
    }

}
