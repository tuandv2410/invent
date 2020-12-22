import { BusinessPartnerEntity } from "src/entities/business/business-partner.entity";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(BusinessPartnerEntity)
export class BusinessPartnerRepository extends Repository<BusinessPartnerEntity> {
    
}