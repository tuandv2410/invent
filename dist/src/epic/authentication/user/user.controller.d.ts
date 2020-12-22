import { DeleteResultInterface } from 'src/interfaces/delete-result.interface';
import { UserDto } from './dto/user.dto';
import { UserService } from './user.service';
import { FilterGetUserDto } from './dto/filter-get-user.dto';
import { CreateUserDto } from './dto/create.user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PermissionService } from '../permission/permission.service';
import { RoleService } from '../role/role.service';
import { AddPermissionsDto } from './dto/add-permissions.dto';
import { AddRoleDto } from './dto/add-role.dto';
export declare class UserController {
    private readonly service;
    private readonly permissionService;
    private readonly roleService;
    constructor(service: UserService, permissionService: PermissionService, roleService: RoleService);
    get(filterDto: FilterGetUserDto): Promise<UserDto[]>;
    getWithRelations(filterDto: FilterGetUserDto): Promise<UserDto[]>;
    create(userData: CreateUserDto): Promise<UserDto>;
    update(id: string, userData: UpdateUserDto): Promise<UserDto>;
    destroy(id: string): Promise<DeleteResultInterface>;
    addPermission(userData: AddPermissionsDto): Promise<UserDto>;
    addRole(userData: AddRoleDto): Promise<UserDto>;
}
