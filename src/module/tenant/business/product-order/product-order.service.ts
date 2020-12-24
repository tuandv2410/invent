import { Inject, Injectable } from '@nestjs/common';
import { BaseService } from 'src/base/base.service';
import { ProductOrderEntity } from 'src/entities/tenant/business/product-order.entity';
import { ProductOrderRepository } from './product-order.repository';

@Injectable()
export class ProductOrderService extends BaseService<ProductOrderEntity, ProductOrderRepository>{
    constructor(
        repository: ProductOrderRepository,
        @Inject('CONNECTION') private connection
    ) {
        super(repository)
        this.repository = this.connection.getRepository(ProductOrderEntity);
    }
}