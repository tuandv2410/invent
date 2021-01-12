import { AutoMap } from 'nestjsx-automapper';
import { Mapper } from '@nartc/automapper'
import { SkuEntity } from 'src/entities/tenant/inventory/sku.entity';
import { IsNotEmpty, IsOptional } from 'class-validator';
import { ProductSourcingContractEntity } from 'src/entities/tenant/sourcing/product-sourcing-contract.entity';
import { ProductSourcingOrderEntity } from 'src/entities/tenant/sourcing/product-sourcing-order.entity';


class ProductSourcingContract {
  id: string;

  quantity: number;

  totalPrice: number;

  discount: number;

  currency: string;
}
Mapper.createMap(ProductSourcingContractEntity, ProductSourcingContract)

class ProductSourcingOrder {
  id: string;

  quantity: number;

  totalPrice: number;

  discount: number;

  currency: string;
}
Mapper.createMap(ProductSourcingOrderEntity, ProductSourcingOrder)

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

  @AutoMap(()=> ProductSourcingContract)
  @IsOptional()
  productSourcingContracts: ProductSourcingContract[];

  @AutoMap()
  @IsOptional()
  productSourcingOrders: ProductSourcingOrder[];
}

Mapper.createMap(SkuEntity, SkuDto)