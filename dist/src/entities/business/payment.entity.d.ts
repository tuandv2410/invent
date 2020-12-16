import { BaseEntity } from "typeorm";
import { PaymentStatus } from "src/business/enum/payment-status.enum";
import { OrderEntity } from "./order.entity";
export declare class PaymentEntity extends BaseEntity {
    id: string;
    value: number;
    status: PaymentStatus;
    date: string;
    order: OrderEntity;
}
