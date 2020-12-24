import { IsOptional } from 'class-validator';
import { ShipmentStatus } from 'src/module/tenant/business/enum/shipment-status.enum';

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
  order: string;
}