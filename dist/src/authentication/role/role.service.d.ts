import { RoleEntity } from 'src/entities/authentication/role.entity';
import { Repository } from 'typeorm';
import { DeleteResultInterface } from '../permission/interfaces/delete-result.interface';
import { PermissionService } from '../permission/permission.service';
import { AddPermissionsDto } from './dto/add-permissions.dto';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
export declare class RoleService {
    private roleRepository;
    private permissionService;
    constructor(roleRepository: Repository<RoleEntity>, permissionService: PermissionService);
    getById(id: number): Promise<RoleEntity>;
    getAll(): Promise<RoleEntity[]>;
    getByUserId(userId: number): Promise<RoleEntity[]>;
    create(createRoleDto: CreateRoleDto): Promise<RoleEntity>;
    addPermissions(addPermissionsDto: AddPermissionsDto): Promise<RoleEntity>;
    update(updateRoleDto: UpdateRoleDto): Promise<RoleEntity>;
    delete(id: number): Promise<DeleteResultInterface>;
}
