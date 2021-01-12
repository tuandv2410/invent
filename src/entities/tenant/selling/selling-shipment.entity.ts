import { BaseEntity, Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from "typeorm";
import { AutoMap } from "nestjsx-automapper";
import { ShipmentStatus } from "src/enum/shipment-status.enum";
import { SellingOrderEntity } from "./selling-order.entity";

@Entity('selling-shipment')
export class SellingShipmentEntity extends BaseEntity {
    @PrimaryColumn()
    id: string;

    @Column({
        nullable: false,
    })
    deliveryDate: string;

    @Column({
        nullable: false,
    })
    status: ShipmentStatus

    @Column({
        nullable: false,
    })
    fee_value : number;

    @Column({
        nullable: false,
    })
    currency : string

    @OneToOne(type => SellingOrderEntity, sellingOrder => sellingOrder.sellingShipment, {
        cascade: true
    })
    @JoinColumn()
    sellingOrder: SellingOrderEntity;
}