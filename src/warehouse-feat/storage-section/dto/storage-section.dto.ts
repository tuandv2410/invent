import { AutoMap } from 'nestjsx-automapper';
import { Mapper } from '@nartc/automapper'
import { StorageSectionEntity } from 'src/entities/warehouse-feat/storage-section.entity';

export class StorageSectionDto{
  @AutoMap()
  id: string;

  @AutoMap()
  description: string;

}

Mapper.createMap(StorageSectionEntity, StorageSectionDto);