import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create.user.dto';
import { LoginUserDto } from './dto/login.user.dto';
import { AddPermissionsDto } from './dto/add-permissions.dto';
import { AddRoleDto } from './dto/add-role.dto';
import { CheckPermissionDto } from './dto/check-permission.dto';
import { UserEntity } from 'src/entities/authentication/user.entity';
import { RoleService } from '../role/role.service';
import { PermissionService } from '../permission/permission.service';
import { ChangePasswordDto } from './dto/change-password.dto';
import { ChangePasswordResult } from './interfaces/change-password-result.interface';
export declare class UserService {
    private userRepository;
    private permissionService;
    private roleService;
    constructor(userRepository: Repository<UserEntity>, permissionService: PermissionService, roleService: RoleService);
    create(createUserDto: CreateUserDto): Promise<UserEntity>;
    getAll(): Promise<UserEntity[]>;
    getById(userId: number): Promise<UserEntity>;
    findByLogin(loginUserDto: LoginUserDto): Promise<UserEntity>;
    findByUsername(username: string): Promise<UserEntity>;
    changePassword(changePasswordDto: ChangePasswordDto): Promise<ChangePasswordResult>;
    checkPermission(checkPermissionDto: CheckPermissionDto): Promise<Boolean>;
    addRole(addRoleDto: AddRoleDto): Promise<UserEntity>;
    addPermissions(addPermissionsDto: AddPermissionsDto): Promise<UserEntity>;
    private hashPassword;
}
