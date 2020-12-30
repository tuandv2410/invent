import { Module } from '@nestjs/common';
import { SourcingPaymentController } from './sourcing-payment.controller';
import { SourcingPaymentService } from './sourcing-payment.service';

@Module({
  controllers: [SourcingPaymentController],
  providers: [SourcingPaymentService]
})
export class SourcingPaymentModule {}
