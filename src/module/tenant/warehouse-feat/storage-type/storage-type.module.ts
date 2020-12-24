import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StorageTypeController } from './storage-type.controller';
import { StorageTypeRepository } from './storage-type.repository';
import { StorageTypeService } from './storage-type.service';

@Module({
  controllers: [StorageTypeController],
  providers: [StorageTypeService,StorageTypeRepository]
})
export class StorageTypeModule {}
