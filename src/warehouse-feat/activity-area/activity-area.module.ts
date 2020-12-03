import { Module } from '@nestjs/common';
import { ActivityAreaController } from './activity-area.controller';
import { ActivityAreaService } from './activity-area.service';

@Module({
  controllers: [ActivityAreaController],
  providers: [ActivityAreaService]
})
export class ActivityAreaModule {}
