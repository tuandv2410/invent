import { BaseEntity } from "typeorm";
import { Period } from "src/enum/period.enum";
import { SourcingPaymentEntity } from "./sourcing-payment.entity";
export declare class AccountPayableEntity extends BaseEntity {
    id: string;
    dueDate: string;
    startDate: string;
    endDate: string;
    currency: string;
    value: number;
    period: Period;
    sourcingPayment: SourcingPaymentEntity;
}
