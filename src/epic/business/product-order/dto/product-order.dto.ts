import { AutoMap } from 'nestjsx-automapper';
import { mapFrom, Mapper } from '@nartc/automapper'
import { ProductOrderEntity } from 'src/entities/business/product-order.entity';
import { IsNotEmpty, IsOptional } from 'class-validator';

class Order {
  id: string;

  createDate: string;
}

class Sku {

  id: string;

  productName: string;

  expireDate: string;

  unitPrice: number;

  currency: string;

  quantity: number;
}

export class ProductOrderDto {
  @AutoMap()
  @IsNotEmpty()
  id: string;

  @AutoMap()
  @IsOptional()
  order: Order;

  @AutoMap()
  @IsOptional()
  sku: Sku;

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
.forMember(
  d=>d.order,
  mapFrom(s=>s.order)
).forMember(
  d=>d.sku,
  mapFrom(s=>s.sku)
)