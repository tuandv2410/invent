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

    async assignOrderToBC(order:OrderEntity, bc: BusinessContractEntity): Promise<ResultInterface> {
        let result: ResultInterface = {
            message: "succes",
            succes: true
        }
        try {
            order.businessContract = bc;
            order.save();
        } catch (err) {
            result = {
                message: err,
                succes: false
            }
        }

        return result
    }
}
