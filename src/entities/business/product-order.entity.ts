import { BaseEntity, Column, Entity, ManyToOne, PrimaryColumn} from "typeorm";
import { AutoMap } from "nestjsx-automapper";
import { OrderEntity } from "./order.entity";
import { SkuEntity } from "../inventory/sku.entity";

@Entity('product-order')
export class ProductOrderEntity extends BaseEntity {
    @AutoMap()
    @PrimaryColumn()
    id: string;

    @AutoMap()
    @Column()
    quantity: number;

    @AutoMap()
    @Column()
    totalPrice: number;

    @AutoMap()
    @Column()
    discount: number;

    @AutoMap()
    @Column()
    currency: string;

    @ManyToOne(type => OrderEntity, order => order.productOrders, {
        cascade: true
    })
    order: OrderEntity;

    @ManyToOne(type => SkuEntity, sku => sku.productOrders, {
        cascade: true
    })
    sku: SkuEntity;
}