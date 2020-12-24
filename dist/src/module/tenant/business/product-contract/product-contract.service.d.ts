import { BaseService } from 'src/base/base.service';
import { ProductContractEntity } from 'src/entities/tenant/business/product-contract.entity';
import { ProductContractRepository } from './product-contract.repository';
export declare class ProductContractService extends BaseService<ProductContractEntity, ProductContractRepository> {
    private connection;
    constructor(repository: ProductContractRepository, connection: any);
}
