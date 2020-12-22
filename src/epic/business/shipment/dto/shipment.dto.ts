import { AutoMap } from 'nestjsx-automapper';
import { Mapper } from '@nartc/automapper'
import { ShipmentStatus } from 'src/epic/business/enum/shipment-status.enum';
import { ShipmentEntity } from 'src/entities/business/shipment.entity';
import { IsNotEmpty } from 'class-validator';

export class ShipmentDto {
  @AutoMap()
  @IsNotEmpty()
  id: string;

  @AutoMap()
  @IsNotEmpty()
  value: number;

  @AutoMap()
  @IsNotEmpty()
  status: ShipmentStatus;

  @AutoMap()
  @IsNotEmpty()
  deliveryDate: string;
}

Mapper.createMap(ShipmentEntity, ShipmentDto);