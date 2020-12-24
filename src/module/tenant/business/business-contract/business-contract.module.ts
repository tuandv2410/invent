import { Module } from '@nestjs/common';
import { BusinessContractController } from './business-contract.controller';
import { BusinessContractService } from './business-contract.service';
import { BusinessPartnerRepository } from '../business-partner/business-partner.repository';
import { BusinessContractRepository } from './business-contract.repository';

@Module({
  controllers: [BusinessContractController],
  providers: [BusinessContractService, BusinessContractRepository],
  exports: [BusinessContractService]
})
export class BusinessContractModule {}
