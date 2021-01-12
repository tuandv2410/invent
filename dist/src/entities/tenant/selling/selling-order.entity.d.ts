import { BaseEntity } from "typeorm";
import { SellingBusinessContractEntity } from "./selling-business-contract.entity";
import { ProductSellingOrderEntity } from "./product-selling-order.entity";
import { SellingShipmentEntity } from "./selling-shipment.entity";
import { SellingPaymentEntity } from "./selling-payment.entity";
export declare class SellingOrderEntity extends BaseEntity {
    id: string;
    createdDate: string;
    value: number;
    addingServiceType: string;
    sellingBusinessContract: SellingBusinessContractEntity;
    productSellingOrders: ProductSellingOrderEntity[];
    sellingShipment: SellingShipmentEntity;
    sellingpayments: SellingPaymentEntity[];
}
