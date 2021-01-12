import { BaseEntity } from "typeorm";
import { SkuEntity } from "../inventory/sku.entity";
import { SourcingBusinessContractEntity } from "./sourcing-business-contract.entity";
export declare class ProductSourcingContractEntity extends BaseEntity {
    id: string;
    quantity: number;
    totalPricr: number;
    discount: number;
    currency: string;
    sku: SkuEntity;
    sourcingBusinessContract: SourcingBusinessContractEntity;
}
