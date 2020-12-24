import { WarehouseEntity } from "src/entities/tenant/warehouse-feat/warehouse.entity";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(WarehouseEntity)
export class WarehouseRepository extends Repository<WarehouseEntity> {
    
}