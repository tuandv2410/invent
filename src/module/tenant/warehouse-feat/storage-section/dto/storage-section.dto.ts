import { AutoMap } from 'nestjsx-automapper';
import { mapFrom, Mapper } from '@nartc/automapper'
import { StorageSectionEntity } from 'src/entities/tenant/warehouse-feat/storage-section.entity';
import { BinType } from 'src/enum/bin-type.enum';
import { IsNotEmpty } from 'class-validator';

class StorageBin {
  id: string;

  name: string;

  maxWeight: number;

  totalCapicity: number;

  type: BinType;
}

export class StorageSectionDto{
  @AutoMap()
  @IsNotEmpty()
  id: string;

  @AutoMap()
  @IsNotEmpty()
  name: string;

  @AutoMap()
  storageBins: StorageBin[]

}

Mapper.createMap(StorageSectionEntity, StorageSectionDto)
.forMember(
  d=>d.storageBins,
  mapFrom(s=>s.storageBins)
)