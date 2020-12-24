import { Module } from '@nestjs/common';
import { HandlingUnitService } from './handling-unit.service';
import { HandlingUnitController } from './handling-unit.controller';
import { HandlingUnitRepository } from './handling-unit.repository';

@Module({
  providers: [HandlingUnitService,HandlingUnitRepository],
  controllers: [HandlingUnitController],
  exports: [HandlingUnitService]
})
export class HandlingUnitModule {}
