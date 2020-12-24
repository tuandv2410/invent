import { IsNotEmpty, IsOptional } from 'class-validator';
import { AutoMap } from 'nestjsx-automapper';
import { mapFrom, Mapper } from '@nartc/automapper'
import { BusinessContractEntity } from 'src/entities/tenant/business/business-contract.entity';

class Order {
  @AutoMap()
  id: string;
  @AutoMap()
  createDate: string;
}

class ProductContract {
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

export class BusinessContractDto {
  @AutoMap()
  @IsNotEmpty()
  id: string;

  @AutoMap()
  @IsNotEmpty()
  createDate: string;

  @AutoMap()
  @IsNotEmpty()
  moneyValue: number;

  @AutoMap(()=> Order)
  @IsOptional()
  orders: Order[];

  @AutoMap(()=> ProductContract)
  @IsOptional()
  productContracts: ProductContract[];

}

Mapper.createMap(BusinessContractEntity, BusinessContractDto)
.forMember(
  d=>d.orders,
  mapFrom(s=>s.orders)
).forMember(
  d=>d.productContracts,
  mapFrom(s=>s.productContracts)
)