import { Module } from '@nestjs/common';
import { SkuService } from './sku.service';
import { SkuController } from './sku.controller';
import { SkuRepository } from './sku.repository';

@Module({
  providers: [SkuService,SkuRepository],
  controllers: [SkuController],
  exports: [SkuService]
})
export class SkuModule {}
