import { Module } from '@nestjs/common';
import { SellingOrderController } from './selling-order.controller';
import { SellingOrderService } from './selling-order.service';

@Module({
  controllers: [SellingOrderController],
  providers: [SellingOrderService]
})
export class SellingOrderModule {}
