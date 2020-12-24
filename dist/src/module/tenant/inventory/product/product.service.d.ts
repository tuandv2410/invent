import { BaseService } from 'src/base/base.service';
import { ProductEntity } from 'src/entities/tenant/inventory/product.entity';
import { ProductRepository } from './product.repository';
export declare class ProductService extends BaseService<ProductEntity, ProductRepository> {
    private connection;
    constructor(repository: ProductRepository, connection: any);
}
