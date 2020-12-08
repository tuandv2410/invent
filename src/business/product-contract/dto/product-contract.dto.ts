import { AutoMap } from 'nestjsx-automapper';
import { Mapper } from '@nartc/automapper'
import { ProductContractEntity } from 'src/entities/business/product-contract.entity';

export class ProductContractDto {
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

Mapper.createMap(ProductContractEntity, ProductContractDto);