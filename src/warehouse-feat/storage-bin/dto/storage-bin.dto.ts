import { AutoMap } from 'nestjsx-automapper';
import { Mapper } from '@nartc/automapper'
import { BinType } from 'src/warehouse-feat/enum/bin-type.enum';
import { StorageBinEntity } from 'src/entities/warehouse-feat/storage-bin.entity';

export class StorageBinDto{
  @AutoMap()
  id: string;

  @AutoMap()
  maxWeight: number;

  @AutoMap()
  totalCapicity: number;

  @AutoMap()
  type: BinType;

}

Mapper.createMap(StorageBinEntity, StorageBinDto);