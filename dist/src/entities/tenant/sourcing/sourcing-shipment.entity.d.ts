import { BaseEntity } from "typeorm";
import { ShipmentStatus } from "src/enum/shipment-status.enum";
import { SourcingOrderEntity } from "./sourcing-order.entity";
export declare class SourcingShipmentEntity extends BaseEntity {
    id: string;
    receivedDate: string;
    status: ShipmentStatus;
    fee_value: number;
    currency: string;
    sourcingOrder: SourcingOrderEntity;
}
