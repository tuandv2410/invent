import { Module } from '@nestjs/common';
import { SourcingOrderController } from './sourcing-order.controller';
import { SourcingOrderService } from './sourcing-order.service';

@Module({
  controllers: [SourcingOrderController],
  providers: [SourcingOrderService]
})
export class SourcingOrderModule {}
