import { AutoMap } from 'nestjsx-automapper';
import { Mapper } from '@nartc/automapper'
import { StorageTypeEntity } from 'src/entities/warehouse-feat/storage-type.entity';
import { StoType } from 'src/warehouse-feat/enum/sto-type.enum';

export class StorageTypeDto{
  @AutoMap()
  id: string;

  @AutoMap()
  areaType: StoType;

}

Mapper.createMap(StorageTypeEntity, StorageTypeDto);