import { PackgingMaterialEntity } from "src/entities/tenant/inventory/packging-material.entity";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(PackgingMaterialEntity)
export class PackgingMaterialRepository extends Repository<PackgingMaterialEntity> {
    
}