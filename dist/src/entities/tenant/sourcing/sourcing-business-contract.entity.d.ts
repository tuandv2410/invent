import { BaseEntity } from "typeorm";
import { BusinessPartnerEntity } from "../inventory/business-partner.entity";
import { ProductSourcingContractEntity } from "./product-sourcing-contract.entity";
import { SourcingOrderEntity } from "./sourcing-order.entity";
export declare class SourcingBusinessContractEntity extends BaseEntity {
    id: string;
    createdDate: string;
    moneyValue: number;
    businessPartner: BusinessPartnerEntity;
    productSourcingContracts: ProductSourcingContractEntity[];
    sourcingOrders: SourcingOrderEntity[];
}
