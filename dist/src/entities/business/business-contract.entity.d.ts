import { BaseEntity } from "typeorm";
import { BusinessPartnerEntity } from "./business-partner.entity";
import { OrderEntity } from "./order.entity";
import { ProductContractEntity } from "./product-contract.entity";
export declare class BusinessContractEntity extends BaseEntity {
    id: string;
    createDate: string;
    moneyValue: number;
    businessPartner: BusinessPartnerEntity;
    orders: OrderEntity[];
    productContracts: ProductContractEntity[];
}
