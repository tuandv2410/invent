import { ProductEntity } from "src/entities/inventory/product.entity";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(ProductEntity)
export class ProductRepository extends Repository<ProductEntity> {
    
}