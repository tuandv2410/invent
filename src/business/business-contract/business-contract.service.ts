import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/base/base.service';
import { BusinessContractEntity } from 'src/entities/business/business-contract.entity';
import { BusinessPartnerEntity } from 'src/entities/business/business-partner.entity';
import { ResultInterface } from 'src/interfaces/result.interface';
import { BusinessContractRepository } from './business-contract.repository';

@Injectable()
export class BusinessContractService extends BaseService<BusinessContractEntity, BusinessContractRepository>{
    constructor(
        repository: BusinessContractRepository,
    ) {
        super(repository)
    }

    async assignBCToBP(bc:BusinessContractEntity, bp: BusinessPartnerEntity): Promise<ResultInterface> {
        let result: ResultInterface = {
            message: "succes",
            succes: true
        }
        try {
            bc.businessPartner = bp;
            bc.save();
        } catch (err) {
            result = {
                message: err,
                succes: false
            }
        }

        return result
    }

}