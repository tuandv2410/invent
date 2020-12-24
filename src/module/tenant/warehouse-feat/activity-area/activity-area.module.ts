import { Module } from '@nestjs/common';
import { ActivityAreaController } from './activity-area.controller';
import { ActivityAreaRepository } from './activity-area.repository';
import { ActivityAreaService } from './activity-area.service';

@Module({
  controllers: [ActivityAreaController],
  providers: [ActivityAreaService,ActivityAreaRepository]
})
export class ActivityAreaModule {}
