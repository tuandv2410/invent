import { AutoMap } from 'nestjsx-automapper';
import { mapFrom, Mapper } from '@nartc/automapper'
import { HuType } from '../../enum/hu-type.enum';
import { HuStatus } from '../../enum/hu-status.enum';
import { HandlingUnitEntity } from 'src/entities/tenant/inventory/handling-unit.entity';
import { IsNotEmpty, IsOptional } from 'class-validator';

class Sku {
  id: string;

  expireDate: string;

  unitPrice: number;

  currency: string;

  quantity: number;
}

export class HandlingUnitDto{
  @AutoMap()
  @IsNotEmpty()
  id: string;

  @AutoMap()
  @IsNotEmpty()
  type: HuType;

  @AutoMap()
  @IsOptional()
  parentId: string;

  @AutoMap()
  @IsNotEmpty()
  dimension: number;

  @AutoMap()
  @IsNotEmpty()
  weight: number;

  @AutoMap()
  @IsNotEmpty()
  volume: number;

  @AutoMap()
  @IsNotEmpty()
  totalPrice: number;

  @AutoMap()
  @IsNotEmpty()
  currency: string;

  @AutoMap()
  @IsNotEmpty()
  quantity: number;

  @AutoMap()
  @IsNotEmpty()
  status: HuStatus;

  @AutoMap()
  @IsOptional()
  skus: Sku[];

}

Mapper.createMap(HandlingUnitEntity, HandlingUnitDto)
.forMember(
  d=>d.skus,
  mapFrom(s=>s.skus)
)
  
