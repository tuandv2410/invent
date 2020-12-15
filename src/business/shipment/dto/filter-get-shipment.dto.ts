import { IsOptional } from 'class-validator';
import { ShipmentStatus } from 'src/business/enum/shipment-status.enum';

export class FilterGetShipmentDto  {
  @IsOptional()
  id: string;

  @IsOptional()
  value: number;

  @IsOptional()
  status: ShipmentStatus;

  @IsOptional()
  deliveryDate: string;

  @IsOptional()
  quantity: number;

  @IsOptional()
  order: string;
}