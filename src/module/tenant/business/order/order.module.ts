import { forwardRef, Module } from '@nestjs/common';
import { SkuModule } from 'src/module/tenant/inventory/sku/sku.module';
import { AddingServiceModule } from '../adding-service/adding-service.module';
import { BusinessContractModule } from '../business-contract/business-contract.module';
import { BusinessPartnerModule } from '../business-partner/business-partner.module';
import { PaymentModule } from '../payment/payment.module';
import { ProductOrderModule } from '../product-order/product-order.module';
import { ShipmentModule } from '../shipment/shipment.module';
import { OrderController } from './order.controller';
import { OrderRepository } from './order.repository';
import { OrderService } from './order.service';

@Module({
  imports: [
    forwardRef(()=>BusinessPartnerModule),
    forwardRef(()=>BusinessContractModule),
    forwardRef(()=>ProductOrderModule),
    forwardRef(()=>ShipmentModule),
    forwardRef(()=>PaymentModule),
    forwardRef(()=>AddingServiceModule),
    forwardRef(()=>SkuModule),
  ],
  controllers: [OrderController],
  providers: [
    OrderService,
    OrderRepository
  ],
  exports: [OrderService]
})
export class OrderModule {}
