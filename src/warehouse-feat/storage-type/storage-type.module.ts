import { Module } from '@nestjs/common';
import { StorageTypeController } from './storage-type.controller';
import { StorageTypeService } from './storage-type.service';

@Module({
  controllers: [StorageTypeController],
  providers: [StorageTypeService]
})
export class StorageTypeModule {}
