import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StorageBinController } from './storage-bin.controller';
import { StorageBinRepository } from './storage-bin.repository';
import { StorageBinService } from './storage-bin.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([StorageBinRepository]),
  ],
  controllers: [StorageBinController],
  providers: [StorageBinService]
})
export class StorageBinModule {}
