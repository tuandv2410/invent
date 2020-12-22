import { ShipmentStatus } from 'src/epic/business/enum/shipment-status.enum';
export declare class ShipmentDto {
    id: string;
    value: number;
    status: ShipmentStatus;
    deliveryDate: string;
}
