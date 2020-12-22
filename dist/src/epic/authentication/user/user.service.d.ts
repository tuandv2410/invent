import { UserEntity } from 'src/entities/authentication/user.entity';
import { BaseService } from 'src/base/base.service';
import { UserRepository } from './user.repository';
import { PermissionEntity } from 'src/entities/authentication/permission.entity';
import { RoleEntity } from 'src/entities/authentication/role.entity';
import { LoginUserDto } from '../auth/dto/login.user.dto';
import { ChangePasswordDto } from '../auth/dto/change-password.dto';
import { ResultInterface } from 'src/interfaces/result.interface';
export declare class UserService extends BaseService<UserEntity, UserRepository> {
    constructor(repository: UserRepository);
    login(userData: LoginUserDto): Promise<UserEntity>;
    changePassword(userData: ChangePasswordDto): Promise<ResultInterface>;
    addRole(user: UserEntity, role: RoleEntity): Promise<void>;
    addPermission(user: UserEntity, permissions: PermissionEntity[]): Promise<void>;
    hashPassword(password: string, salt: string): Promise<string>;
}
