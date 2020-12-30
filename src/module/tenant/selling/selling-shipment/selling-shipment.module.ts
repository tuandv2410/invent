import { Module } from '@nestjs/common';
import { SellingShipmentController } from './selling-shipment.controller';
import { SellingShipmentService } from './selling-shipment.service';

@Module({
  controllers: [SellingShipmentController],
  providers: [SellingShipmentService]
})
export class SellingShipmentModule {}
