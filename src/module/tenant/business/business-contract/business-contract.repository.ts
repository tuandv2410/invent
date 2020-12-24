import { BusinessContractEntity } from "src/entities/tenant/business/business-contract.entity";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(BusinessContractEntity)
export class BusinessContractRepository extends Repository<BusinessContractEntity> {
    
}