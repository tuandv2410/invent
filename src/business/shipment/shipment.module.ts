import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShipmentController } from './shipment.controller';
import { ShipmentRepository } from './shipment.repository';
import { ShipmentService } from './shipment.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([ShipmentRepository]),
  ],
  controllers: [ShipmentController],
  providers: [ShipmentService]
})
export class ShipmentModule {}
