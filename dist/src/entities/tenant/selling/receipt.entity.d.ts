import { BaseEntity } from "typeorm";
import { SellingPaymentEntity } from "./selling-payment.entity";
import { RevenueEntity } from "./revenue.entity";
export declare class ReceiptEntity extends BaseEntity {
    id: string;
    createDate: string;
    skuId: string;
    productId: string;
    sellingPayment: SellingPaymentEntity;
    revenues: RevenueEntity[];
}
