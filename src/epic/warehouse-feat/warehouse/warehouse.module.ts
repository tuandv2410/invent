import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WarehouseController } from './warehouse.controller';
import { WarehouseRepository } from './warehouse.repository';
import { WarehouseService } from './warehouse.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([WarehouseRepository]),
  ],
  controllers: [WarehouseController],
  providers: [WarehouseService]
})
export class WarehouseModule {}
