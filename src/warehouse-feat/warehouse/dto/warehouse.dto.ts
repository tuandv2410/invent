import { AutoMap } from 'nestjsx-automapper';
import { Mapper } from '@nartc/automapper'
import { WarehouseEntity } from 'src/entities/warehouse-feat/warehouse.entity';

export class WarehouseDto{
  @AutoMap()
  id: string;

  @AutoMap()
  location: string;

}

Mapper.createMap(WarehouseEntity, WarehouseDto);