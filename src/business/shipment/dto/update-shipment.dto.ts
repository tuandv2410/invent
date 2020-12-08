import { AutoMap } from 'nestjsx-automapper';
import { ShipmentStatus } from 'src/business/enum/shipment-status.enum';

export class UpdateShipmentDto {

    @AutoMap()
    value: number;
  
    @AutoMap()
    status: ShipmentStatus;
  
    @AutoMap()
    deliveryDate: string;
  
    @AutoMap()
    quantity: number;
}