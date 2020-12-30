import { AutoMap } from 'nestjsx-automapper';
import { mapFrom, Mapper } from '@nartc/automapper'
import { ActArea } from 'src/enum/activity-area.enum';
import { ActivityAreaEntity } from 'src/entities/tenant/warehouse-feat/activity-area.entity';
import { BinType } from 'src/enum/bin-type.enum';
import { IsNotEmpty } from 'class-validator';


class StorageBin {

  id: string;

  name: string;

  maxWeight: number;

  totalCapicity: number;

  type: BinType;
}
export class ActivityAreaDto{
  @AutoMap()
  @IsNotEmpty()
  id: string;

  @AutoMap()
  @IsNotEmpty()
  name:string;

  @AutoMap()
  @IsNotEmpty()
  activity: ActArea;

  @AutoMap()
  @IsNotEmpty()
  storageBins: StorageBin[]

}

Mapper.createMap(ActivityAreaEntity, ActivityAreaDto)
.forMember(
  d=>d.storageBins,
  mapFrom(s=>s.storageBins)
)