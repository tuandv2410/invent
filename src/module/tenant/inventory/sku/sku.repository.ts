import { SkuEntity } from "src/entities/tenant/inventory/sku.entity";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(SkuEntity)
export class SkuRepository extends Repository<SkuEntity> {
    
}