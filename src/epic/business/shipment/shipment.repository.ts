import { ProductOrderEntity } from "src/entities/business/product-order.entity";
import { ShipmentEntity } from "src/entities/business/shipment.entity";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(ShipmentEntity)
export class ShipmentRepository extends Repository<ShipmentEntity> {
    
}