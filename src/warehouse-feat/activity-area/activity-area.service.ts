import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/base/base.service';
import { ActivityAreaEntity } from 'src/entities/warehouse-feat/activity-area.entity';
import { ActivityAreaRepository } from './activity-area.repository';

@Injectable()
export class ActivityAreaService extends BaseService<ActivityAreaEntity, ActivityAreaRepository>{
    constructor(repository: ActivityAreaRepository) {
        super(repository)
    }
}