import { AutoMap } from 'nestjsx-automapper';
import { mapFrom, Mapper } from '@nartc/automapper'
import { PmCategory } from 'src/inventory/enum/pm-category.enum';
import { PmType } from 'src/inventory/enum/pm-type.enum';
import { PackgingMaterialEntity } from 'src/entities/inventory/packging-material.entity';
import { IsNotEmpty, IsOptional } from 'class-validator';
import { HuType } from 'src/inventory/enum/hu-type.enum';
import { HuStatus } from 'src/inventory/enum/hu-status.enum';

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

export class PackgingMaterialDto{
  @AutoMap()
  @IsNotEmpty()
  id: string;

  @AutoMap()
  @IsNotEmpty()
  type: PmType;

  @AutoMap()
  @IsNotEmpty()
  category: PmCategory;

  @AutoMap()
  @IsOptional()
  tareWeight: number;

  @AutoMap()
  @IsOptional()
  tareVolume: number;

  @AutoMap()
  @IsOptional()
  capacities: number;

  @AutoMap()
  @IsOptional()
  handlingUnits: HandlingUnit[]

  @AutoMap()
  @IsOptional()
  packageSpecifications: PackageSpecification[]

}

Mapper.createMap(PackgingMaterialEntity, PackgingMaterialDto)
.forMember(
  d=>d.handlingUnits,
  mapFrom(s=>s.handlingUnits)
).forMember(
  d=>d.packageSpecifications,
  mapFrom(s=>s.packageSpecifications)
)