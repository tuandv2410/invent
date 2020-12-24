import { Inject, Injectable } from '@nestjs/common';
import { BaseService } from 'src/base/base.service';
import { ActivityAreaEntity } from 'src/entities/tenant/warehouse-feat/activity-area.entity';
import { ActivityAreaRepository } from './activity-area.repository';

@Injectable()
export class ActivityAreaService extends BaseService<ActivityAreaEntity, ActivityAreaRepository>{
    constructor(
        repository: ActivityAreaRepository,
        @Inject('CONNECTION') private connection
    ) {
        super(repository)
        this.repository = this.connection.getRepository(ActivityAreaEntity);
    }
}