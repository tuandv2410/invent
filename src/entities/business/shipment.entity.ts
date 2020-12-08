import { BaseEntity, Column, Entity, OneToOne, PrimaryColumn } from "typeorm";
import { AutoMap } from "nestjsx-automapper";
import { ShipmentStatus } from "src/business/enum/shipment-status.enum";
import { OrderEntity } from "./order.entity";

@Entity('shipment')
export class ShipmentEntity extends BaseEntity {
    @AutoMap()
    @PrimaryColumn()
    id: string;

    @AutoMap()
    @Column()
    value: number;

    @AutoMap()
    @Column()
    status: ShipmentStatus;

    @AutoMap()
    @Column()
    deliveryDate: string;

    @AutoMap()
    @Column()
    quantity: number;

    @AutoMap(()=>OrderEntity)
    @OneToOne(type => OrderEntity, order => order.shipment, {
        cascade: true
    })
    order: OrderEntity;
}