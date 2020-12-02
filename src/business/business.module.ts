import { Module } from '@nestjs/common';
import { BusinessPartnerModule } from './business-partner/business-partner.module';
import { BusinessContractModule } from './business-contract/business-contract.module';
import { OrderModule } from './order/order.module';
import { PaymentModule } from './payment/payment.module';
import { ShipmentModule } from './shipment/shipment.module';

@Module({
  imports: [BusinessPartnerModule, BusinessContractModule, OrderModule, PaymentModule, ShipmentModule]
})
export class BusinessModule {}
