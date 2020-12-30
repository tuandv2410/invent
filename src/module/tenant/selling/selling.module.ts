import { Module } from '@nestjs/common';
import { SellingShipmentModule } from './selling-shipment/selling-shipment.module';
import { SellingPaymentModule } from './selling-payment/selling-payment.module';
import { ProductSellingOrderModule } from './product-selling-order/product-selling-order.module';
import { ProductSellingContractModule } from './product-selling-contract/product-selling-contract.module';
import { SellingOrderModule } from './selling-order/selling-order.module';
import { ReceiptModule } from './receipt/receipt.module';
import { AccountReceivableModule } from './account-receivable/account-receivable.module';
import { CommissionModule } from './commission/commission.module';
import { RevenueModule } from './revenue/revenue.module';
import { SellingBusinessContractsModule } from './selling-business-contracts/selling-business-contracts.module';
import { AddingServiceModule } from './adding-service/adding-service.module';

@Module({
  imports: [SellingShipmentModule, SellingPaymentModule, ProductSellingOrderModule, ProductSellingContractModule, SellingOrderModule, ReceiptModule, AccountReceivableModule, CommissionModule, RevenueModule, SellingBusinessContractsModule, AddingServiceModule],
})
export class SellingModule {}
