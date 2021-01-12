import { BaseEntity } from "typeorm";
import { SkuEntity } from "../inventory/sku.entity";
import { SellingBusinessContractEntity } from "./selling-business-contract.entity";
export declare class ProductSellingContractEntity extends BaseEntity {
    id: string;
    quantity: number;
    totalPrice: number;
    discount: number;
    currency: string;
    sku: SkuEntity;
    sellingBusinessContract: SellingBusinessContractEntity;
}
