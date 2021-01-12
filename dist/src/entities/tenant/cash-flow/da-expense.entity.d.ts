import { BaseEntity } from "typeorm";
import { Period } from "src/enum/period.enum";
export declare class DaExpenseEntity extends BaseEntity {
    id: string;
    description: string;
    paidDate: string;
    value: string;
    currency: string;
    startDate: string;
    endDate: string;
    period: Period;
}
