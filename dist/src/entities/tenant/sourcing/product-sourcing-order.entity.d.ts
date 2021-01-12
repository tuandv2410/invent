import { BaseEntity } from "typeorm";
import { SkuEntity } from "../inventory/sku.entity";
import { SourcingOrderEntity } from "./sourcing-order.entity";
export declare class ProductSourcingOrderEntity extends BaseEntity {
    id: string;
    quantity: number;
    totalPricr: number;
    discount: number;
    currency: string;
    sku: SkuEntity;
    sourcingOrder: SourcingOrderEntity;
}
