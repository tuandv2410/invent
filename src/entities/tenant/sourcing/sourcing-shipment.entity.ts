import { BaseEntity, Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from "typeorm";
import { AutoMap } from "nestjsx-automapper";
import { ShipmentStatus } from "src/enum/shipment-status.enum";
import { SourcingOrderEntity } from "./sourcing-order.entity";

@Entity('sourcing-shipment')
export class SourcingShipmentEntity extends BaseEntity {
    @AutoMap()
    @PrimaryColumn()
    id: string;

    @AutoMap()
    @Column({
        nullable: false,
    })
    receivedDate: string;

    @AutoMap()
    @Column({
        nullable: false,
    })
    status: ShipmentStatus

    @AutoMap()
    @Column({
        nullable: false,
    })
    fee_value : number;

    @AutoMap()
    @Column({
        nullable: false,
    })
    currency : string

    @AutoMap(()=>SourcingOrderEntity)
    @OneToOne(type => SourcingOrderEntity, sourcingOrder => sourcingOrder.sourcingShipment, {
        cascade: true
    })
    @JoinColumn()
    sourcingOrder: SourcingOrderEntity;
}