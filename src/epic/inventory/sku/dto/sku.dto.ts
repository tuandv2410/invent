import { AutoMap } from 'nestjsx-automapper';
import { mapFrom, Mapper } from '@nartc/automapper'
import { SkuEntity } from 'src/entities/inventory/sku.entity';
import { IsNotEmpty, IsOptional } from 'class-validator';


class ProductContract {
  id: string;
  quantity: number;
  totalPrice: number;
  discount: number;
  currency: string;
}

class productOrder {
  id: string;

  quantity: number;

  totalPrice: number;

  discount: number;

  currency: string;
}

export class SkuDto{
  @AutoMap()
  @IsNotEmpty()
  id: string;

  @AutoMap()
  @IsNotEmpty()
  productName: string;

  @AutoMap()
  @IsNotEmpty()
  productId: string;

  @AutoMap()
  @IsNotEmpty()
  expireDate: string;

  @AutoMap()
  @IsNotEmpty()
  unitPrice: number;

  @AutoMap()
  @IsNotEmpty()
  currency: string;

  @AutoMap()
  @IsNotEmpty()
  quantity: number;

  @AutoMap(()=> ProductContract)
  @IsOptional()
  productContracts: ProductContract[];

  @AutoMap()
  @IsOptional()
  productOrders: productOrder[];
}

Mapper.createMap(SkuEntity, SkuDto)
.forMember(
  d=>d.productContracts,
  mapFrom(s=>s.productContracts)
).forMember(
  d=>d.productOrders,
  mapFrom(s=>s.productOrders)
)