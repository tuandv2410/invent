import { ProductOrderEntity } from "src/entities/tenant/business/product-order.entity";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(ProductOrderEntity)
export class ProductOrderRepository extends Repository<ProductOrderEntity> {
    
}