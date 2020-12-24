import { Module } from '@nestjs/common';
import { PackgingMaterialService } from './packging-material.service';
import { PackgingMaterialController } from './packging-material.controller';
import { PackgingMaterialRepository } from './packging-material.repository';

@Module({
  providers: [PackgingMaterialService,PackgingMaterialRepository],
  controllers: [PackgingMaterialController],
  exports: [PackgingMaterialService]
})
export class PackgingMaterialModule {}
