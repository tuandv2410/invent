import { BaseEntity, Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from "typeorm";
import { AutoMap } from "nestjsx-automapper";
import { ShipmentStatus } from "src/module/tenant/business/enum/shipment-status.enum";
import { OrderEntity } from "./order.entity";

@Entity('shipment')
export class ShipmentEntity extends BaseEntity {
    @AutoMap()
    @PrimaryColumn()
    id: string;

    @AutoMap()
    @Column({
        nullable: false,
    })
    value: number;

    @AutoMap()
    @Column({
        nullable: false,
    })
    status: ShipmentStatus;

    @AutoMap()
    @Column({
        nullable: false,
    })
    deliveryDate: string;

    @AutoMap(()=>OrderEntity)
    @OneToOne(type => OrderEntity, order => order.shipment, {
        cascade: true
    })
    @JoinColumn()
    order: OrderEntity;
}