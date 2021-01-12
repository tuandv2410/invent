import { BaseEntity } from "typeorm";
import { Period } from "src/enum/period.enum";
import { SellingBusinessContractEntity } from "./selling-business-contract.entity";
export declare class CommissionEntity extends BaseEntity {
    id: string;
    startDate: string;
    endDate: string;
    currency: string;
    value: number;
    period: Period;
    sellingBusinessContract: SellingBusinessContractEntity;
}
