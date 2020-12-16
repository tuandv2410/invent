import { AddPermissionsDto } from './dto/add-permissions.dto';
import { CreateRoleDto } from './dto/create-role.dto';
import { RoleDto } from './dto/role.dto';
import { RoleService } from './role.service';
export declare class RoleController {
    private readonly roleService;
    constructor(roleService: RoleService);
    create(createRoleDto: CreateRoleDto): Promise<RoleDto>;
    getAll(): Promise<RoleDto[]>;
    addPermissions(addPermissionsDto: AddPermissionsDto): Promise<RoleDto>;
}
