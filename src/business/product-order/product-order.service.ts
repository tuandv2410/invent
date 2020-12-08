import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/base/base.service';
import { ProductOrderEntity } from 'src/entities/business/product-order.entity';
import { ProductOrderRepository } from './product-order.repository';

@Injectable()
export class ProductOrderService extends BaseService<ProductOrderEntity, ProductOrderRepository>{
    constructor(repository: ProductOrderRepository) {
        super(repository)
    }
}