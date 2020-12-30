import { Module } from '@nestjs/common';
import { ProductSourcingContractController } from './product-sourcing-contract.controller';
import { ProductSourcingContractService } from './product-sourcing-contract.service';

@Module({
  controllers: [ProductSourcingContractController],
  providers: [ProductSourcingContractService]
})
export class ProductSourcingContractModule {}
