import { IsNotEmpty } from 'class-validator';
import { ShipmentStatus } from 'src/epic/business/enum/shipment-status.enum';

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
