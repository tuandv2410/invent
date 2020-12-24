import { IsNotEmpty } from 'class-validator';
import { ShipmentStatus } from 'src/module/tenant/business/enum/shipment-status.enum';

export class CreateShipmentDto {

    @IsNotEmpty()
    value: number;
  
    @IsNotEmpty()
    status: ShipmentStatus;
  
    @IsNotEmpty()
    deliveryDate: string;

    @IsNotEmpty()
    order: string;
}
