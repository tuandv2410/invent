import { Inject, Injectable } from '@nestjs/common';
import { BaseService } from 'src/base/base.service';
import { OrderEntity } from 'src/entities/tenant/business/order.entity';
import { OrderRepository } from './order.repository';

@Injectable()
export class OrderService extends BaseService<OrderEntity, OrderRepository>{
    constructor(
        repository: OrderRepository,
        @Inject('CONNECTION') private connection
    ) {
        super(repository)
        this.repository = this.connection.getRepository(OrderEntity);
    }
}
