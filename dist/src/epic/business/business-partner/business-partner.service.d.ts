import { BaseService } from 'src/base/base.service';
import { BusinessPartnerEntity } from 'src/entities/business/business-partner.entity';
import { BusinessPartnerRepository } from './business-partner.repository';
export declare class BusinessPartnerService extends BaseService<BusinessPartnerEntity, BusinessPartnerRepository> {
    constructor(repository: BusinessPartnerRepository);
}
