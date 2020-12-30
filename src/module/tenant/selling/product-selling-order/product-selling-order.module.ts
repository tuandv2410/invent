import { Module } from '@nestjs/common';
import { ProductSellingOrderController } from './product-selling-order.controller';
import { ProductSellingOrderService } from './product-selling-order.service';

@Module({
  controllers: [ProductSellingOrderController],
  providers: [ProductSellingOrderService]
})
export class ProductSellingOrderModule {}
