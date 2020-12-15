import { AutoMap } from 'nestjsx-automapper';
import { Mapper } from '@nartc/automapper'
import { ProductOrderEntity } from 'src/entities/business/product-order.entity';
import { IsNotEmpty } from 'class-validator';

export class ProductOrderDto {
  @AutoMap()
  @IsNotEmpty()
  id: string;

  @AutoMap()
  @IsNotEmpty()
  order: string;

  @AutoMap()
  @IsNotEmpty()
  sku: string;

  @AutoMap()
  @IsNotEmpty()
  quantity: number;

  @AutoMap()
  @IsNotEmpty()
  totalPrice: number;

  @AutoMap()
  @IsNotEmpty()
  discount: number;

  @AutoMap()
  @IsNotEmpty()
  currency: string;
}

Mapper.createMap(ProductOrderEntity, ProductOrderDto)