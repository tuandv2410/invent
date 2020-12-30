import { BaseEntity, Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { AutoMap } from "nestjsx-automapper";
import { SkuEntity } from "../inventory/sku.entity";
import { SourcingOrderEntity } from "./sourcing-order.entity";

@Entity('product-sourcing-order')
export class ProductSourcingOrderEntity extends BaseEntity {
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
    totalPricr: number;
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

    @ManyToOne(type => SkuEntity, sku => sku.productSourcingOrders, {
        cascade: true
    })
    sku: SkuEntity;

    @ManyToOne(type => SourcingOrderEntity, sourcingOrder => sourcingOrder.productSourcingOrders, {
        cascade: true
    })
    sourcingOrder: SourcingOrderEntity;
}