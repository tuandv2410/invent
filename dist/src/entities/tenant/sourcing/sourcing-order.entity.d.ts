import { BaseEntity } from "typeorm";
import { SourcingBusinessContractEntity } from "./sourcing-business-contract.entity";
import { ProductSourcingOrderEntity } from "./product-sourcing-order.entity";
import { SourcingShipmentEntity } from "./sourcing-shipment.entity";
import { SourcingPaymentEntity } from "./sourcing-payment.entity";
export declare class SourcingOrderEntity extends BaseEntity {
    id: string;
    createdDate: string;
    addingServiceId: string;
    sourcingBusinessContract: SourcingBusinessContractEntity;
    productSourcingOrders: ProductSourcingOrderEntity[];
    sourcingShipment: SourcingShipmentEntity;
    sourcingpayments: SourcingPaymentEntity[];
}
