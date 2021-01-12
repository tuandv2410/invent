import { BaseEntity } from "typeorm";
import { ShipmentStatus } from "src/enum/shipment-status.enum";
import { SellingOrderEntity } from "./selling-order.entity";
export declare class SellingShipmentEntity extends BaseEntity {
    id: string;
    deliveryDate: string;
    status: ShipmentStatus;
    fee_value: number;
    currency: string;
    sellingOrder: SellingOrderEntity;
}
