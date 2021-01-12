import { BaseEntity } from "typeorm";
import { AccountTypes } from "src/enum/account-stype.enum";
import { Period } from "src/enum/period.enum";
import { ReceiptEntity } from "./receipt.entity";
export declare class RevenueEntity extends BaseEntity {
    id: string;
    startDate: string;
    endDate: string;
    currency: string;
    value: number;
    type: AccountTypes;
    period: Period;
    receipt: ReceiptEntity;
}
