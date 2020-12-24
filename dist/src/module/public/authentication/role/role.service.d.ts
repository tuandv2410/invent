import { BaseService } from 'src/base/base.service';
import { RoleEntity } from 'src/entities/public/authentication/role.entity';
import { RoleRepository } from './role.repository';
export declare class RoleService extends BaseService<RoleEntity, RoleRepository> {
    constructor(repository: RoleRepository);
    getByUser(userId: string): Promise<RoleEntity[]>;
    getByPermission(permissionId: string): Promise<RoleEntity[]>;
}
