import { BaseEntity, Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from "typeorm";
import { AutoMap } from "nestjsx-automapper";
import { ShipmentStatus } from "src/enum/shipment-status.enum";
import { SellingOrderEntity } from "./selling-order.entity";

@Entity('selling-shipment')
export class SellingShipmentEntity extends BaseEntity {
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

    @AutoMap(()=>SellingOrderEntity)
    @OneToOne(type => SellingOrderEntity, sellingOrder => sellingOrder.sellingShipment, {
        cascade: true
    })
    @JoinColumn()
    sellingOrder: SellingOrderEntity;
}