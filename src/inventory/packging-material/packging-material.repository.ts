import { PackgingMaterialEntity } from "src/entities/inventory/packging-material.entity";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(PackgingMaterialEntity)
export class PackgingMaterialRepository extends Repository<PackgingMaterialEntity> {
    
}