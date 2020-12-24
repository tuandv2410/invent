import { BaseService } from 'src/base/base.service';
import { OrderEntity } from 'src/entities/tenant/business/order.entity';
import { OrderRepository } from './order.repository';
export declare class OrderService extends BaseService<OrderEntity, OrderRepository> {
    private connection;
    constructor(repository: OrderRepository, connection: any);
}
