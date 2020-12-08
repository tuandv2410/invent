import { AutoMap } from 'nestjsx-automapper';
import { Mapper } from '@nartc/automapper'
import { ActArea } from 'src/warehouse-feat/enum/activity-area.enum';
import { ActivityAreaEntity } from 'src/entities/warehouse-feat/activity-area.entity';

export class ActivityAreaDto{
  @AutoMap()
  id: string;

  @AutoMap()
  activity: ActArea;

}

Mapper.createMap(ActivityAreaEntity, ActivityAreaDto);