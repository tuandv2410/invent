import { RoleEntity } from "src/entities/public/authentication/role.entity";
import { OrganizationEntity } from "src/entities/public/authentication/organization.entity";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(OrganizationEntity)
export class OrganizationRepository extends Repository<OrganizationEntity> {
    
}