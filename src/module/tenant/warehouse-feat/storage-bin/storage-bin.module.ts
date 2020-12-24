import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StorageBinController } from './storage-bin.controller';
import { StorageBinRepository } from './storage-bin.repository';
import { StorageBinService } from './storage-bin.service';

@Module({
  controllers: [StorageBinController],
  providers: [StorageBinService,StorageBinRepository]
})
export class StorageBinModule {}
