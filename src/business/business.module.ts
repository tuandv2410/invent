import { Module } from '@nestjs/common';
import { OrderModule } from './order/order.module';
import { BusinessPartnerModule } from './business-partner/business-partner.module';
import { BusinessContractModule } from './business-contract/business-contract.module';
import { PaymentModule } from './payment/payment.module';
import { ShipmentModule } from './shipment/shipment.module';
import { ProductContractModule } from './product-contract/product-contract.module';
import { ProductOrderModule } from './product-order/product-order.module';

@Module({
  imports: [OrderModule, BusinessPartnerModule, BusinessContractModule, PaymentModule, ShipmentModule, ProductContractModule, ProductOrderModule]
})
export class BusinessModule {}
