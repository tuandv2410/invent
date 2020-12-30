import { Module } from '@nestjs/common';
import { ProductSellingContractController } from './product-selling-contract.controller';
import { ProductSellingContractService } from './product-selling-contract.service';

@Module({
  controllers: [ProductSellingContractController],
  providers: [ProductSellingContractService]
})
export class ProductSellingContractModule {}
