import { BaseEntity } from "typeorm";
import { AddingServiceEntity } from "./adding-service.entity";
import { BusinessContractEntity } from "./business-contract.entity";
import { PaymentEntity } from "./payment.entity";
import { ShipmentEntity } from "./shipment.entity";
import { ProductOrderEntity } from "./product-order.entity";
export declare class OrderEntity extends BaseEntity {
    id: string;
    createDate: string;
    businessContract: BusinessContractEntity;
    payments: PaymentEntity[];
    shipment: ShipmentEntity;
    productOrders: ProductOrderEntity[];
    addingService: AddingServiceEntity;
}
