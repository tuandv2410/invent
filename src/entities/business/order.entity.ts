import { BaseEntity, Column, Entity, ManyToOne, OneToMany, OneToOne, PrimaryColumn } from "typeorm";
import { AutoMap } from "nestjsx-automapper";
import { BusinessPartnerEntity } from "./business-partner.entity";
import { BusinessContractEntity } from "./business-contract.entity";
import { PaymentEntity } from "./payment.entity";
import { ShipmentEntity } from "./shipment.entity";
import { ProductOrderEntity } from "./product-order.entity";

@Entity('order')
export class OrderEntity extends BaseEntity {
    @AutoMap()
    @PrimaryColumn()
    id: string;

    @AutoMap()
    @Column({
        type: 'varchar',
        nullable: false,
    })
    createDate: string;

    @ManyToOne(type => BusinessPartnerEntity, businessPartner => businessPartner.orders, {
        cascade: true
    })
    businessPartner: BusinessPartnerEntity;

    @ManyToOne(type => BusinessContractEntity, businessContract => businessContract.orders, {
        cascade: true
    })
    businessContract: BusinessContractEntity;

    @AutoMap(()=>PaymentEntity)
    @OneToOne(type => PaymentEntity, payment => payment.order)
    payment: PaymentEntity;

    @AutoMap(()=>ShipmentEntity)
    @OneToOne(type => ShipmentEntity, shipment => shipment.order)
    shipment: ShipmentEntity;

    @AutoMap(()=>ProductOrderEntity)
    @OneToMany(type => ProductOrderEntity, productOrder => productOrder.order)
    productOrders: ProductOrderEntity;

}