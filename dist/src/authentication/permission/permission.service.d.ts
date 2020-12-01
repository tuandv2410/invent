import { PermissionEntity } from 'src/entities/authentication/permission.entity';
import { Repository } from 'typeorm';
import { CreatePermissionDto } from './dto/create-permission.dto';
import { UpdatePermissionDto } from './dto/update-permission.dto';
import { DeleteResultInterface } from './interfaces/delete-result.interface';
export declare class PermissionService {
    private permissionRepository;
    constructor(permissionRepository: Repository<PermissionEntity>);
    getById(id: number): Promise<PermissionEntity>;
    getAll(): Promise<PermissionEntity[]>;
    getMany(ids: number[]): Promise<PermissionEntity[]>;
    getByUserId(userId: number): Promise<PermissionEntity[]>;
    getByRoleId(roleId: number): Promise<PermissionEntity[]>;
    create(createPermissionDto: CreatePermissionDto): Promise<PermissionEntity>;
    update(updatePermissionDto: UpdatePermissionDto): Promise<PermissionEntity>;
    delete(id: number): Promise<DeleteResultInterface>;
}
