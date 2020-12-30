import { Module } from '@nestjs/common';
import { SellingPaymentController } from './selling-payment.controller';
import { SellingPaymentService } from './selling-payment.service';

@Module({
  controllers: [SellingPaymentController],
  providers: [SellingPaymentService]
})
export class SellingPaymentModule {}
