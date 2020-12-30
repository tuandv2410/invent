import { Module } from '@nestjs/common';
import { ProductSourcingOrderController } from './product-sourcing-order.controller';
import { ProductSourcingOrderService } from './product-sourcing-order.service';

@Module({
  controllers: [ProductSourcingOrderController],
  providers: [ProductSourcingOrderService]
})
export class ProductSourcingOrderModule {}
