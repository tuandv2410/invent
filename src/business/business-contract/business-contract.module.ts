import { Module } from '@nestjs/common';
import { BusinessContractController } from './business-contract.controller';
import { BusinessContractService } from './business-contract.service';

@Module({
  controllers: [BusinessContractController],
  providers: [BusinessContractService]
})
export class BusinessContractModule {}
