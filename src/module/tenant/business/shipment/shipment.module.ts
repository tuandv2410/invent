import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShipmentController } from './shipment.controller';
import { ShipmentRepository } from './shipment.repository';
import { ShipmentService } from './shipment.service';

@Module({
  controllers: [ShipmentController],
  providers: [ShipmentService,ShipmentRepository],
  exports: [ShipmentService]
})
export class ShipmentModule {}
