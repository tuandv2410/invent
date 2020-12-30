import { Module } from '@nestjs/common';
import { SourcingBusinessContractsController } from './sourcing-business-contracts.controller';
import { SourcingBusinessContractsService } from './sourcing-business-contracts.service';

@Module({
  controllers: [SourcingBusinessContractsController],
  providers: [SourcingBusinessContractsService]
})
export class SourcingBusinessContractsModule {}
