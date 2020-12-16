import { AddPermissionsDto } from './dto/add-permissions.dto';
import { UserDto } from './dto/user.dto';
import { UserService } from './user.service';
import { AddRoleDto } from './dto/add-role.dto';
import { ChangePasswordDto } from './dto/change-password.dto';
import { ChangePasswordResult } from './interfaces/change-password-result.interface';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    addPermissions(addPermissionsDto: AddPermissionsDto): Promise<UserDto>;
    getAll(): Promise<UserDto[]>;
    getById(userId: number): Promise<UserDto>;
    addRoles(addRolesDto: AddRoleDto): Promise<UserDto>;
    changePassword(changePasswordDto: ChangePasswordDto): Promise<ChangePasswordResult>;
}
