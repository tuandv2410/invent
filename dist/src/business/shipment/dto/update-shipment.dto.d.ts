import { ShipmentStatus } from 'src/business/enum/shipment-status.enum';
export declare class UpdateShipmentDto {
    value: number;
    status: ShipmentStatus;
    deliveryDate: string;
}
