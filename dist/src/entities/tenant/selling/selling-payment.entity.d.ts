import { BaseEntity } from "typeorm";
import { SellingPaymentStatus } from "src/enum/selling-payment-status.enum";
import { SellingOrderEntity } from "./selling-order.entity";
import { AccountReceivableEntity } from "./account-receivable.entity";
import { ReceiptEntity } from "./receipt.entity";
export declare class SellingPaymentEntity extends BaseEntity {
    id: string;
    status: SellingPaymentStatus;
    value: number;
    currency: string;
    sellingOrder: SellingOrderEntity;
    accountReceivable: AccountReceivableEntity;
    receipts: ReceiptEntity[];
}
