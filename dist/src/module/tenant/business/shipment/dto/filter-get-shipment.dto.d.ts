import { ShipmentStatus } from 'src/module/tenant/business/enum/shipment-status.enum';
export declare class FilterGetShipmentDto {
    id: string;
    value: number;
    status: ShipmentStatus;
    deliveryDate: string;
    order: string;
}
