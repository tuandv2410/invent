import { Inject, Injectable } from '@nestjs/common';
import { BaseService } from 'src/base/base.service';
import { BusinessPartnerEntity } from 'src/entities/tenant/inventory/business-partner.entity';
import { BusinessPartnerRepository } from './business-partner.repository';

@Injectable()
export class BusinessPartnerService extends BaseService<BusinessPartnerEntity, BusinessPartnerRepository>{
    constructor(
        repository: BusinessPartnerRepository,
        @Inject('CONNECTION') private connection
    ) {
        super(repository)
        this.repository = this.connection.getRepository(BusinessPartnerEntity);
    }
}