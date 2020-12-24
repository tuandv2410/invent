import { BaseService } from 'src/base/base.service';
import { BusinessPartnerEntity } from 'src/entities/tenant/business/business-partner.entity';
import { BusinessPartnerRepository } from './business-partner.repository';
export declare class BusinessPartnerService extends BaseService<BusinessPartnerEntity, BusinessPartnerRepository> {
    private connection;
    constructor(repository: BusinessPartnerRepository, connection: any);
}
