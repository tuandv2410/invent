import { Module } from '@nestjs/common';
import { StorageSectionController } from './storage-section.controller';
import { StorageSectionService } from './storage-section.service';

@Module({
  controllers: [StorageSectionController],
  providers: [StorageSectionService]
})
export class StorageSectionModule {}
