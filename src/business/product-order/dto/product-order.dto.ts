import { AutoMap } from 'nestjsx-automapper';
import { Mapper } from '@nartc/automapper'
import { ProductOrderEntity } from 'src/entities/business/product-order.entity';

export class ProductOrderDto {
  @AutoMap()
  id: string;

  @AutoMap()
  quantity: number;

  @AutoMap()
  totalPrice: number;

  @AutoMap()
  discount: number;

  @AutoMap()
  currency: string;
}

Mapper.createMap(ProductOrderEntity, ProductOrderDto);