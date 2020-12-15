import { AutoMap } from 'nestjsx-automapper';
import { Mapper } from '@nartc/automapper'
import { ProductContractEntity } from 'src/entities/business/product-contract.entity';
import { IsNotEmpty } from 'class-validator';

export class ProductContractDto {
  @AutoMap()
  @IsNotEmpty()
  id: string;

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

Mapper.createMap(ProductContractEntity, ProductContractDto);