import { ShipmentStatus } from 'src/module/tenant/business/enum/shipment-status.enum';
export declare class ShipmentDto {
    id: string;
    value: number;
    status: ShipmentStatus;
    deliveryDate: string;
}
