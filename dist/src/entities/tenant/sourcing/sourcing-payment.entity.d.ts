import { BaseEntity } from "typeorm";
import { SourcingPaymentStatus } from "src/enum/sourcing-payment-status.enum";
import { SourcingOrderEntity } from "./sourcing-order.entity";
import { AccountPayableEntity } from "./account-payable.entity";
import { PaymentVoucherEntity } from "./payment-voucher.entity";
export declare class SourcingPaymentEntity extends BaseEntity {
    id: string;
    status: SourcingPaymentStatus;
    value: number;
    currency: string;
    sourcingOrder: SourcingOrderEntity;
    accountPayable: AccountPayableEntity;
    paymentVouchers: PaymentVoucherEntity[];
}
