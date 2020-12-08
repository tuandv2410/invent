import { Module } from '@nestjs/common';
import { PackgingMaterialService } from './packging-material.service';
import { PackgingMaterialController } from './packging-material.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PackgingMaterialRepository } from './packging-material.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([PackgingMaterialRepository]),
  ],
  providers: [PackgingMaterialService],
  controllers: [PackgingMaterialController]
})
export class PackgingMaterialModule {}
