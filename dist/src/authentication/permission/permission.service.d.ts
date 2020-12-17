import { PermissionEntity } from 'src/entities/authentication/permission.entity';
import { BaseService } from 'src/base/base.service';
import { PermissionRepository } from './permission.repository';
export declare class PermissionService extends BaseService<PermissionEntity, PermissionRepository> {
    constructor(repository: PermissionRepository);
    getByRole(roleId: string): Promise<PermissionEntity[]>;
    getByUser(userId: string): Promise<PermissionEntity[]>;
}
