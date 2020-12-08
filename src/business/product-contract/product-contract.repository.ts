import { ProductContractEntity } from "src/entities/business/product-contract.entity";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(ProductContractEntity)
export class ProductContractRepository extends Repository<ProductContractEntity> {
    
}