import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductOrderController } from './product-order.controller';
import { ProductOrderRepository } from './product-order.repository';
import { ProductOrderService } from './product-order.service';

@Module({
  controllers: [ProductOrderController],
  providers: [ProductOrderService,ProductOrderRepository],
  exports: [ProductOrderService]
})
export class ProductOrderModule {}
