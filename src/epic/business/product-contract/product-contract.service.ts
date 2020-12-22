import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/base/base.service';
import { ProductContractEntity } from 'src/entities/business/product-contract.entity';
import { ProductContractRepository } from './product-contract.repository';

@Injectable()
export class ProductContractService extends BaseService<ProductContractEntity, ProductContractRepository>{
    constructor(repository: ProductContractRepository) {
        super(repository)
    }
}