import { AutoMap } from 'nestjsx-automapper';
import { mapFrom, Mapper } from '@nartc/automapper'
import { PackageSpecificationEntity } from 'src/entities/tenant/inventory/package-specification.entity';
import { HuStatus } from 'src/enum/hu-status.enum';
import { HuType } from 'src/enum/hu-type.enum';
import { IsNotEmpty, IsOptional } from 'class-validator';

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

export class PackageSpecificationDto{
  @AutoMap()
  @IsNotEmpty()
  id: string;

  @AutoMap()
  @IsNotEmpty()
  name: string;

  @AutoMap()
  @IsNotEmpty()
  packingLevel: number;

  @AutoMap()
  @IsNotEmpty()
  quantity: number;

  @AutoMap()
  @IsOptional()
  handlingUnits: HandlingUnit[]

}

Mapper.createMap(PackageSpecificationEntity, PackageSpecificationDto)
.forMember(
  d=>d.handlingUnits,
  mapFrom(s=>s.handlingUnits)
)