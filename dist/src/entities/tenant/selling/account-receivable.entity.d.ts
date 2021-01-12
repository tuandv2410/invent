import { BaseEntity } from "typeorm";
import { Period } from "src/enum/period.enum";
import { SellingPaymentEntity } from "./selling-payment.entity";
export declare class AccountReceivableEntity extends BaseEntity {
    id: string;
    dueDate: string;
    startDate: string;
    endDate: string;
    currency: string;
    value: number;
    period: Period;
    sellingPayment: SellingPaymentEntity;
}
