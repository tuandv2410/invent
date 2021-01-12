import { BaseEntity } from "typeorm";
import { SourcingPaymentEntity } from "./sourcing-payment.entity";
import { AccountEntity } from "./account.entity";
export declare class PaymentVoucherEntity extends BaseEntity {
    id: string;
    createDate: string;
    skuId: string;
    productId: string;
    sourcingPayment: SourcingPaymentEntity;
    accounts: AccountEntity[];
}
