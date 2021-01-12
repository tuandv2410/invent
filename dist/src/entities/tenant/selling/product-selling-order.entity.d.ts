import { BaseEntity } from "typeorm";
import { SkuEntity } from "../inventory/sku.entity";
import { SellingOrderEntity } from "./selling-order.entity";
export declare class ProductSellingOrderEntity extends BaseEntity {
    id: string;
    quantity: number;
    totalPrice: number;
    discount: number;
    currency: string;
    sku: SkuEntity;
    sellingOrder: SellingOrderEntity;
}
