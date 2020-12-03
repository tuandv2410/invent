import { Module } from '@nestjs/common';
import { StorageBinController } from './storage-bin.controller';
import { StorageBinService } from './storage-bin.service';

@Module({
  controllers: [StorageBinController],
  providers: [StorageBinService]
})
export class StorageBinModule {}
