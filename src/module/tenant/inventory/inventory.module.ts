import { Module } from '@nestjs/common';
import { BusinessPartnerModule } from './business-partner/business-partner.module';
import { HandlingUnitModule } from './handling-unit/handling-unit.module';
import { PackageSpecificationModule } from './package-specification/package-specification.module';
import { PackgingMaterialModule } from './packging-material/packging-material.module';
import { ProductModule } from './product/product.module';
import { SkuModule } from './sku/sku.module';

@Module({
  imports: [HandlingUnitModule, PackageSpecificationModule, PackgingMaterialModule, ProductModule, SkuModule, BusinessPartnerModule]
})
export class InventoryModule {}
