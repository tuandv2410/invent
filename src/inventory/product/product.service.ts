import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/base/base.service';
import { ProductEntity } from 'src/entities/inventory/product.entity';
import { ProductRepository } from './product.repository';

@Injectable()
export class ProductService extends BaseService<ProductEntity, ProductRepository>{
    constructor(repository: ProductRepository) {
        super(repository)
    }
}