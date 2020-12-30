import { Module } from '@nestjs/common';
import { SourcingShipmentController } from './sourcing-shipment.controller';
import { SourcingShipmentService } from './sourcing-shipment.service';

@Module({
  controllers: [SourcingShipmentController],
  providers: [SourcingShipmentService]
})
export class SourcingShipmentModule {}
