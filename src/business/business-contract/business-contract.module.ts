import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BusinessContractController } from './business-contract.controller';
import { BusinessContractService } from './business-contract.service';
import { BusinessContractRepository } from './business-contract.repository';
import { BusinessPartnerModule } from '../business-partner/business-partner.module';

@Module({
  imports: [
    BusinessPartnerModule,
    TypeOrmModule.forFeature([BusinessContractRepository]),
  ],
  controllers: [BusinessContractController],
  providers: [BusinessContractService],
  exports: [BusinessContractService]
})
export class BusinessContractModule {}
