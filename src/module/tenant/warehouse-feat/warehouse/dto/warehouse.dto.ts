import { AutoMap } from 'nestjsx-automapper';
import { mapFrom, Mapper } from '@nartc/automapper'
import { WarehouseEntity } from 'src/entities/tenant/warehouse-feat/warehouse.entity';
import { StoType } from 'src/module/tenant/warehouse-feat/enum/sto-type.enum';
import { ActArea } from 'src/module/tenant/warehouse-feat/enum/activity-area.enum';
import { IsNotEmpty, IsOptional } from 'class-validator';

class StorageType {
  id: string;

  name: string;

  areaType: StoType;
}

class AcivityArea {
  id: string;

  name: string;

  activity: ActArea;
}
export class WarehouseDto{
  @AutoMap()
  @IsNotEmpty()
  id: string;

  @AutoMap()
  @IsNotEmpty()
  location: string;

  @AutoMap()
  @IsNotEmpty()
  name: string;

  @AutoMap()
  @IsOptional()
  storageTypes: StorageType[]

  @AutoMap()
  @IsOptional()
  activityAreas: AcivityArea[]
}

Mapper.createMap(WarehouseEntity, WarehouseDto)
.forMember(
  d=>d.storageTypes,
  mapFrom(s=>s.storageTypes)
).forMember(
  d=>d.activityAreas,
  mapFrom(s=>s.activityAreas)
)