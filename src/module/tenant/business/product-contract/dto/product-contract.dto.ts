import { AutoMap } from 'nestjsx-automapper';
import { mapFrom, Mapper } from '@nartc/automapper'
import { ProductContractEntity } from 'src/entities/tenant/business/product-contract.entity';
import { IsNotEmpty, IsOptional } from 'class-validator';

class BusinessContract {

  id: string;

  createDate: string;

  moneyValue: number;
}
class Sku {

  id: string;

  productName: string;

  expireDate: string;

  unitPrice: number;

  currency: string;

  quantity: number;
}

export class ProductContractDto {
  @AutoMap()
  @IsNotEmpty()
  id: string;

  @AutoMap()
  @IsOptional()
  sku: Sku;

  @AutoMap()
  @IsOptional()
  businessContract: BusinessContract;

  @AutoMap()
  @IsNotEmpty()
  quantity: number;

  @IsNotEmpty()
  @AutoMap()
  totalPrice: number;

  @IsNotEmpty()
  @AutoMap()
  discount: number;

  @IsNotEmpty()
  @AutoMap()
  currency: string;
}

Mapper.createMap(ProductContractEntity, ProductContractDto)
.forMember(
  d=>d.businessContract,
  mapFrom(s=>s.businessContract)
).forMember(
  d=>d.sku,
  mapFrom(s=>s.sku)
)