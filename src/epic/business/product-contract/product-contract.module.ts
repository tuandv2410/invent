import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductContractController } from './product-contract.controller';
import { ProductContractRepository } from './product-contract.repository';
import { ProductContractService } from './product-contract.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([ProductContractRepository]),
  ],
  controllers: [ProductContractController],
  providers: [ProductContractService],
  exports: [ProductContractService]
})
export class ProductContractModule {}
