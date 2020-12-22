import { ShipmentStatus } from 'src/epic/business/enum/shipment-status.enum';
export declare class FilterGetShipmentDto {
    id: string;
    value: number;
    status: ShipmentStatus;
    deliveryDate: string;
    order: string;
}
