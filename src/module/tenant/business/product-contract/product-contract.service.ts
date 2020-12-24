import { Inject, Injectable } from '@nestjs/common';
import { BaseService } from 'src/base/base.service';
import { ProductContractEntity } from 'src/entities/tenant/business/product-contract.entity';
import { ProductContractRepository } from './product-contract.repository';

@Injectable()
export class ProductContractService extends BaseService<ProductContractEntity, ProductContractRepository>{
    constructor(
        repository: ProductContractRepository,
        @Inject('CONNECTION') private connection
    ) {
        super(repository)
        this.repository = this.connection.getRepository(ProductContractEntity);
    }
}