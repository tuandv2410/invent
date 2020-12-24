import { BaseEntity } from "typeorm";
import { BusinessContractEntity } from "./business-contract.entity";
import { SkuEntity } from "../inventory/sku.entity";
export declare class ProductContractEntity extends BaseEntity {
    id: string;
    quantity: number;
    totalPrice: number;
    discount: number;
    currency: string;
    businessContract: BusinessContractEntity;
    sku: SkuEntity;
}
