import { ShipmentStatus } from 'src/module/tenant/business/enum/shipment-status.enum';
export declare class UpdateShipmentDto {
    value: number;
    status: ShipmentStatus;
    deliveryDate: string;
}
