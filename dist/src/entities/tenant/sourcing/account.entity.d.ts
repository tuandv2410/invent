import { BaseEntity } from "typeorm";
import { AccountTypes } from "src/enum/account-stype.enum";
import { Period } from "src/enum/period.enum";
import { PaymentVoucherEntity } from "./payment-voucher.entity";
export declare class AccountEntity extends BaseEntity {
    id: string;
    startDate: string;
    endDate: string;
    currency: string;
    value: number;
    type: AccountTypes;
    period: Period;
    paymentVoucher: PaymentVoucherEntity;
}
