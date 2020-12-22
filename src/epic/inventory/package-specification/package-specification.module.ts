import { Module } from '@nestjs/common';
import { PackageSpecificationService } from './package-specification.service';
import { PackageSpecificationController } from './package-specification.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PackageSpecificationRepository } from './package-specification.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([PackageSpecificationRepository]),
  ],
  providers: [PackageSpecificationService],
  controllers: [PackageSpecificationController],
  exports: [PackageSpecificationService]
})
export class PackageSpecificationModule {}
