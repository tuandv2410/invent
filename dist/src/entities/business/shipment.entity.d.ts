import { BaseEntity } from "typeorm";
import { PaymentStatus } from "src/business/enum/payment-status.enum";
export declare class PaymentEntity extends BaseEntity {
    id: number;
    value: number;
    status: PaymentStatus;
    date: string;
}
