import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/base/base.service';
import { BusinessPartnerEntity } from 'src/entities/business/business-partner.entity';
import { BusinessPartnerRepository } from './business-partner.repository';

@Injectable()
export class BusinessPartnerService extends BaseService<BusinessPartnerEntity, BusinessPartnerRepository>{
    constructor(repository: BusinessPartnerRepository) {
        super(repository)
    }
}