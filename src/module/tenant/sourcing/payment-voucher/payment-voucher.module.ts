import { Module } from '@nestjs/common';
import { PaymentVoucherController } from './payment-voucher.controller';
import { PaymentVoucherService } from './payment-voucher.service';

@Module({
  controllers: [PaymentVoucherController],
  providers: [PaymentVoucherService]
})
export class PaymentVoucherModule {}
