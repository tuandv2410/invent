import { Module } from '@nestjs/common';
import { WarehouseModule } from './warehouse/warehouse.module';
import { ActivityAreaModule } from './activity-area/activity-area.module';
import { StorageTypeModule } from './storage-type/storage-type.module';
import { StorageSectionModule } from './storage-section/storage-section.module';
import { StorageBinModule } from './storage-bin/storage-bin.module';

@Module({
  imports: [WarehouseModule, ActivityAreaModule, StorageTypeModule, StorageSectionModule, StorageBinModule]
})
export class WarehouseFeatModule {}
