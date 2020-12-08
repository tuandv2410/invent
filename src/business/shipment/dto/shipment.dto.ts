import { AutoMap } from 'nestjsx-automapper';
import { Mapper } from '@nartc/automapper'
import { ShipmentStatus } from 'src/business/enum/shipment-status.enum';
import { ShipmentEntity } from 'src/entities/business/shipment.entity';

export class ShipmentDto {
  @AutoMap()
  id: string;

  @AutoMap()
  value: number;

  @AutoMap()
  status: ShipmentStatus;

  @AutoMap()
  deliveryDate: string;

  @AutoMap()
  quantity: number;
}

Mapper.createMap(ShipmentEntity, ShipmentDto);