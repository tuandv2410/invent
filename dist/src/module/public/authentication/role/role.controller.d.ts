import { DeleteResultInterface } from 'src/interfaces/delete-result.interface';
import { InsertResult } from 'typeorm';
import { CreateRoleDto } from './dto/create-role.dto';
import { RoleDto } from './dto/role.dto';
import { RoleService } from './role.service';
import { FilterGetRoleDto } from './dto/filter-get-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { AddPermissionsDto } from './dto/add-permissions.dto';
import { PermissionService } from '../permission/permission.service';
export declare class RoleController {
    private readonly service;
    private readonly permissionService;
    constructor(service: RoleService, permissionService: PermissionService);
    get(filterDto: FilterGetRoleDto): Promise<RoleDto[]>;
    getWithRelations(filterDto: FilterGetRoleDto): Promise<RoleDto[]>;
    create(userData: CreateRoleDto): Promise<InsertResult>;
    update(id: string, userData: UpdateRoleDto): Promise<RoleDto>;
    destroy(id: string): Promise<DeleteResultInterface>;
    addPermission(userData: AddPermissionsDto): Promise<RoleDto>;
}
