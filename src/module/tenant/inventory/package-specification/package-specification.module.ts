import { Module } from '@nestjs/common';
import { PackageSpecificationService } from './package-specification.service';
import { PackageSpecificationController } from './package-specification.controller';
import { PackageSpecificationRepository } from './package-specification.repository';

@Module({
  providers: [PackageSpecificationService,PackageSpecificationRepository],
  controllers: [PackageSpecificationController],
  exports: [PackageSpecificationService]
})
export class PackageSpecificationModule {}
