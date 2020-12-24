import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StorageSectionController } from './storage-section.controller';
import { StorageSectionRepository } from './storage-section.repository';
import { StorageSectionService } from './storage-section.service';

@Module({

  controllers: [StorageSectionController],
  providers: [StorageSectionService,StorageSectionRepository]
})
export class StorageSectionModule {}
