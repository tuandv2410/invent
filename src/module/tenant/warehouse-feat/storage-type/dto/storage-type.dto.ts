import { AutoMap } from 'nestjsx-automapper';
import { mapFrom, Mapper } from '@nartc/automapper'
import { StorageTypeEntity } from 'src/entities/tenant/warehouse-feat/storage-type.entity';
import { StoType } from 'src/enum/sto-type.enum';
import { BinType } from 'src/enum/bin-type.enum';


class StorageBin {
  id: string;
  name : string;
  maxWeight: number;

  totalCapicity: number;

  type: BinType;
}

class StorageSection{
  id: string;
  name : string;
  
}

export class StorageTypeDto{
  @AutoMap()
  id: string;

  @AutoMap()
  areaType: StoType;

  @AutoMap()
  name : string;

  @AutoMap()
  storageSections: StorageSection[]

  @AutoMap()
  storageBins: StorageBin[]
}

Mapper.createMap(StorageTypeEntity, StorageTypeDto)
.forMember(
  d=>d.storageBins,
  mapFrom(s=>s.storageBins)
).forMember(
  d=>d.storageSections,
  mapFrom(s=>s.storageSections)
)