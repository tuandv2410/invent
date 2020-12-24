import { BaseEntity } from "typeorm";
import { OrderEntity } from "./order.entity";
import { SkuEntity } from "../inventory/sku.entity";
export declare class ProductOrderEntity extends BaseEntity {
    id: string;
    quantity: number;
    totalPrice: number;
    discount: number;
    currency: string;
    order: OrderEntity;
    sku: SkuEntity;
}
