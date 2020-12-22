import { PackageSpecificationEntity } from "src/entities/inventory/package-specification.entity";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(PackageSpecificationEntity)
export class PackageSpecificationRepository extends Repository<PackageSpecificationEntity> {
    
}