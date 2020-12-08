import { AutoMap } from 'nestjsx-automapper';
import { Mapper } from '@nartc/automapper'
import { SkuEntity } from 'src/entities/inventory/sku.entity';

export class SkuDto{
  @AutoMap()
  id: string;

  @AutoMap()
  expireDate: string;

  @AutoMap()
  unitPrice: number;

  @AutoMap()
  currency: string;

  @AutoMap()
  quantity: number;

}

Mapper.createMap(SkuEntity, SkuDto);