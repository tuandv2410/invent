import { Module } from '@nestjs/common';
import { SourcingBusinessContractsModule } from './sourcing-business-contracts/sourcing-business-contracts.module';
import { SourcingShipmentModule } from './sourcing-shipment/sourcing-shipment.module';
import { SourcingPaymentModule } from './sourcing-payment/sourcing-payment.module';
import { ProductSourcingOrderModule } from './product-sourcing-order/product-sourcing-order.module';
import { ProductSourcingContractModule } from './product-sourcing-contract/product-sourcing-contract.module';
import { PaymentVoucherModule } from './payment-voucher/payment-voucher.module';
import { AccountModule } from './account/account.module';
import { AccountPayableModule } from './account-payable/account-payable.module';
import { SourcingOrderModule } from './sourcing-order/sourcing-order.module';

@Module({
  imports: [SourcingBusinessContractsModule, SourcingShipmentModule, SourcingPaymentModule, ProductSourcingOrderModule, ProductSourcingContractModule, PaymentVoucherModule, AccountModule, AccountPayableModule, SourcingOrderModule]
})
export class SourcingModule {}
