import { BaseEntity } from "typeorm";
import { BusinessPartnerEntity } from "../inventory/business-partner.entity";
import { ProductSellingContractEntity } from "./product-selling-contract.entity";
import { SellingOrderEntity } from "./selling-order.entity";
import { CommissionEntity } from "./commission.entity";
export declare class SellingBusinessContractEntity extends BaseEntity {
    id: string;
    createdDate: string;
    moneyValue: number;
    businessPartner: BusinessPartnerEntity;
    productSellingContracts: ProductSellingContractEntity[];
    sellingOrders: SellingOrderEntity[];
    commission: CommissionEntity;
}
