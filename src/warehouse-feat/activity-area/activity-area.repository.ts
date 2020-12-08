import { ActivityAreaEntity } from "src/entities/warehouse-feat/activity-area.entity";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(ActivityAreaEntity)
export class ActivityAreaRepository extends Repository<ActivityAreaEntity> {
    
}