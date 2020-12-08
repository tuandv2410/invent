import { AutoMap } from 'nestjsx-automapper';
import { Mapper } from '@nartc/automapper'
import { ProductEntity } from 'src/entities/inventory/product.entity';

export class ProductDto{
  @AutoMap()
  id: string;

  @AutoMap()
  name: string;

  @AutoMap()
  weight: number;

  @AutoMap()
  volume: number;

  @AutoMap()
  category: string;

  @AutoMap()
  unitOfMeasurement: string;

  @AutoMap()
  color: string;

}

Mapper.createMap(ProductEntity, ProductDto);