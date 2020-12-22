import { PermissionEntity } from "src/entities/authentication/permission.entity";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(PermissionEntity)
export class PermissionRepository extends Repository<PermissionEntity> {
    
}