import { AutoMap } from 'nestjsx-automapper';
import { mapFrom, Mapper } from '@nartc/automapper'
import { ProductEntity } from 'src/entities/inventory/product.entity';
import { IsNotEmpty, IsOptional } from 'class-validator';
import { HuStatus } from 'src/inventory/enum/hu-status.enum';
import { HuType } from 'src/inventory/enum/hu-type.enum';

class HandlingUnit {
  id: string;

  type: HuType;

  dimension: number;

  weight: number;

  volume: number;

  totalPrice: number;

  currency: string;

  quantity: number;

  status: HuStatus;
}

class PackageSpecification{
  id: string;

  name: string;

  packingLevel: number;

  quantity: number;
}
export class ProductDto{
  @AutoMap()
  @IsNotEmpty()
  id: string;

  @AutoMap()
  @IsNotEmpty()
  name: string;

  @AutoMap()
  @IsOptional()
  weight: number;

  @AutoMap()
  @IsOptional()
  volume: number;

  @AutoMap()
  @IsOptional()
  category: string;

  @AutoMap()
  @IsNotEmpty()
  unitOfMeasurement: string;

  @AutoMap()
  @IsOptional()
  color: string;

  @AutoMap()
  @IsOptional()
  handlingUnits: HandlingUnit[]

  @AutoMap()
  @IsOptional()
  packageSpecifications: PackageSpecification[]

}

Mapper.createMap(ProductEntity, ProductDto)
.forMember(
  d=>d.handlingUnits,
  mapFrom(s=>s.handlingUnits)
).forMember(
  d=>d.packageSpecifications,
  mapFrom(s=>s.packageSpecifications)
)