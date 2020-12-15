import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BusinessContractModule } from '../business-contract/business-contract.module';
import { BusinessPartnerModule } from '../business-partner/business-partner.module';
import { OrderController } from './order.controller';
import { OrderRepository } from './order.repository';
import { OrderService } from './order.service';

@Module({
  imports: [
    BusinessPartnerModule,
    BusinessContractModule,
    TypeOrmModule.forFeature([OrderRepository]),
  ],
  controllers: [OrderController],
  providers: [
    OrderService,
  ]
})
export class OrderModule {}
