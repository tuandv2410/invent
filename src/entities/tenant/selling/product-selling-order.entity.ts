import { BaseEntity, Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { AutoMap } from "nestjsx-automapper";
import { SkuEntity } from "../inventory/sku.entity";
import { SellingOrderEntity } from "./selling-order.entity";

@Entity('product-selling-order')
export class ProductSellingOrderEntity extends BaseEntity {
    @AutoMap()
    @PrimaryColumn()
    id: string;

    @AutoMap()
    @Column({
        nullable: false,
    })
    quantity: number;
    @AutoMap()
    @Column({
        nullable: false,
    })
    totalPrice: number;
    @AutoMap()
    @Column({
        nullable: false,
    })
    discount: number;
    @AutoMap()
    @Column({
        nullable: false,
    })
    currency: string;

    @ManyToOne(type => SkuEntity, sku => sku.productSellingOrders, {
        cascade: true
    })
    sku: SkuEntity;

    @ManyToOne(type => SellingOrderEntity, sellingOrder => sellingOrder.productSellingOrders, {
        cascade: true
    })
    sellingOrder: SellingOrderEntity;
}