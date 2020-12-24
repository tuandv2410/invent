import { BaseEntity, Column, Entity, ManyToOne, OneToMany, OneToOne, PrimaryColumn } from "typeorm";
import { AutoMap } from "nestjsx-automapper";
import { AddingServiceEntity } from "./adding-service.entity";
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
        nullable: false,
    })
    createDate: string;

    @ManyToOne(type => BusinessContractEntity, businessContract => businessContract.orders, {
        cascade: true
    })
    businessContract: BusinessContractEntity;

    @AutoMap(()=>PaymentEntity)
    @OneToMany(type => PaymentEntity, payment => payment.order)
    payments: PaymentEntity[];

    @AutoMap(()=>ShipmentEntity)
    @OneToOne(type => ShipmentEntity, shipment => shipment.order)
    shipment: ShipmentEntity;

    @AutoMap(()=>ProductOrderEntity)
    @OneToMany(type => ProductOrderEntity, productOrder => productOrder.order)
    productOrders: ProductOrderEntity[];

    @AutoMap(()=>AddingServiceEntity)
    @ManyToOne(type => AddingServiceEntity, addingService => addingService.orders, {
        cascade: true
    })
    addingService: AddingServiceEntity;

}