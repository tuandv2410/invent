import { Inject, Injectable } from '@nestjs/common';
import { BaseService } from 'src/base/base.service';
import { ProductEntity } from 'src/entities/tenant/inventory/product.entity';
import { ProductRepository } from './product.repository';

@Injectable()
export class ProductService extends BaseService<ProductEntity, ProductRepository>{
    constructor(
        repository: ProductRepository,
        @Inject('CONNECTION') private connection
    ) {
        super(repository)
        this.repository = this.connection.getRepository(ProductEntity);
    }
}