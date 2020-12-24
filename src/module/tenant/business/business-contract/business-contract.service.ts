import { Inject, Injectable } from '@nestjs/common';
import { BaseService } from 'src/base/base.service';
import { BusinessContractEntity } from 'src/entities/tenant/business/business-contract.entity';
import { BusinessContractRepository } from './business-contract.repository';

@Injectable()
export class BusinessContractService extends BaseService<BusinessContractEntity, BusinessContractRepository>{
    constructor(
        repository: BusinessContractRepository,
        @Inject('CONNECTION') private connection
    ) {
        super(repository)
        this.repository = this.connection.getRepository(BusinessContractEntity);
    }
}