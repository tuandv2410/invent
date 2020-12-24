import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductContractController } from './product-contract.controller';
import { ProductContractRepository } from './product-contract.repository';
import { ProductContractService } from './product-contract.service';

@Module({
  controllers: [ProductContractController],
  providers: [ProductContractService,ProductContractRepository],
  exports: [ProductContractService]
})
export class ProductContractModule {}
