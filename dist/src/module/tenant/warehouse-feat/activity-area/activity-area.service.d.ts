import { BaseService } from 'src/base/base.service';
import { ActivityAreaEntity } from 'src/entities/tenant/warehouse-feat/activity-area.entity';
import { ActivityAreaRepository } from './activity-area.repository';
export declare class ActivityAreaService extends BaseService<ActivityAreaEntity, ActivityAreaRepository> {
    private connection;
    constructor(repository: ActivityAreaRepository, connection: any);
}
