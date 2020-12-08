import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BusinessContractController } from './business-contract.controller';
import { BusinessContractService } from './business-contract.service';
import { BusinessContractRepository } from './business-contract.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([BusinessContractRepository]),
  ],
  controllers: [BusinessContractController],
  providers: [BusinessContractService]
})
export class BusinessContractModule {}
