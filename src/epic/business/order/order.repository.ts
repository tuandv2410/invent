import { OrderEntity } from "src/entities/business/order.entity";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(OrderEntity)
export class OrderRepository extends Repository<OrderEntity> {
    
}