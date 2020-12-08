import { Module } from '@nestjs/common';
import { HandlingUnitService } from './handling-unit.service';
import { HandlingUnitController } from './handling-unit.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HandlingUnitRepository } from './handling-unit.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([HandlingUnitRepository]),
  ],
  providers: [HandlingUnitService],
  controllers: [HandlingUnitController]
})
export class HandlingUnitModule {}
