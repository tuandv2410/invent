import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActivityAreaController } from './activity-area.controller';
import { ActivityAreaRepository } from './activity-area.repository';
import { ActivityAreaService } from './activity-area.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([ActivityAreaRepository]),
  ],
  controllers: [ActivityAreaController],
  providers: [ActivityAreaService]
})
export class ActivityAreaModule {}
