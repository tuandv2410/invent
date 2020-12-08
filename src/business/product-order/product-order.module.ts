import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductOrderController } from './product-order.controller';
import { ProductOrderRepository } from './product-order.repository';
import { ProductOrderService } from './product-order.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([ProductOrderRepository]),
  ],
  controllers: [ProductOrderController],
  providers: [ProductOrderService]
})
export class ProductOrderModule {}
