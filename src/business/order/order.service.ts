import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/base/base.service';
import { BusinessContractEntity } from 'src/entities/business/business-contract.entity';
import { OrderEntity } from 'src/entities/business/order.entity';
import { ResultInterface } from 'src/interfaces/result.interface';
import { OrderRepository } from './order.repository';

@Injectable()
export class OrderService extends BaseService<OrderEntity, OrderRepository>{
    constructor(
        repository: OrderRepository,
   
    ) {
        super(repository)
    }

}
