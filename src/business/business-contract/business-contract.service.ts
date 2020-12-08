import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/base/base.service';
import { BusinessContractEntity } from 'src/entities/business/business-contract.entity';
import { BusinessContractRepository } from './business-contract.repository';

@Injectable()
export class BusinessContractService extends BaseService<BusinessContractEntity, BusinessContractRepository>{
    constructor(repository: BusinessContractRepository) {
        super(repository)
    }
}