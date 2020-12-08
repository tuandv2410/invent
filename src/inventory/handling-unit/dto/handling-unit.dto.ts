import { AutoMap } from 'nestjsx-automapper';
import { Mapper } from '@nartc/automapper'
import { HuType } from '../../enum/hu-type.enum';
import { HuStatus } from '../../enum/hu-status.enum';
import { HandlingUnitEntity } from 'src/entities/inventory/handling-unit.entity';

export class HandlingUnitDto{
  @AutoMap()
  id: string;

  @AutoMap()
  type: HuType;

  @AutoMap()
  dimension: number;

  @AutoMap()
  weight: number;

  @AutoMap()
  volume: number;

  @AutoMap()
  totalPrice: number;

  @AutoMap()
  currency: string;

  @AutoMap()
  quantity: number;

  @AutoMap()
  status: HuStatus;

}

Mapper.createMap(HandlingUnitEntity, HandlingUnitDto);