import { Module } from '@nestjs/common';
import { SkuService } from './sku.service';
import { SkuController } from './sku.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SkuRepository } from './sku.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([SkuRepository]),
  ],
  providers: [SkuService],
  controllers: [SkuController],
  exports: [SkuService]
})
export class SkuModule {}
