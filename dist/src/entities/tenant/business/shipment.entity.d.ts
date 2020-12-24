import { BaseEntity } from "typeorm";
import { ShipmentStatus } from "src/module/tenant/business/enum/shipment-status.enum";
import { OrderEntity } from "./order.entity";
export declare class ShipmentEntity extends BaseEntity {
    id: string;
    value: number;
    status: ShipmentStatus;
    deliveryDate: string;
    order: OrderEntity;
}
