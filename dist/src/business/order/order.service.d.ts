import { BaseService } from 'src/base/base.service';
import { OrderEntity } from 'src/entities/business/order.entity';
import { OrderRepository } from './order.repository';
export declare class OrderService extends BaseService<OrderEntity, OrderRepository> {
    constructor(repository: OrderRepository);
}
