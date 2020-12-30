import { BaseEntity, Column, Entity, ManyToOne, OneToMany, OneToOne, PrimaryColumn } from "typeorm";
import { AutoMap } from "nestjsx-automapper";
import { SourcingBusinessContractEntity } from "./sourcing-business-contract.entity";
import { ProductSourcingOrderEntity } from "./product-sourcing-order.entity";
import { SourcingShipmentEntity } from "./sourcing-shipment.entity";
import { SourcingPaymentEntity } from "./sourcing-payment.entity";

@Entity('sourcing-order')
export class SourcingOrderEntity extends BaseEntity {
    @AutoMap()
    @PrimaryColumn()
    id: string;

    @AutoMap()
    @Column({
        nullable: false,
    })
    createdDate: string;

    @AutoMap()
    @Column({
        nullable: true,
    })
    addingServiceId: string;
    
    @ManyToOne(type => SourcingBusinessContractEntity, sourcingBusinessContract => sourcingBusinessContract.sourcingOrders, {
        cascade: true
    })
    sourcingBusinessContract: SourcingBusinessContractEntity;

    @AutoMap(()=>ProductSourcingOrderEntity)
    @OneToMany(type => ProductSourcingOrderEntity, productSourcingOrder => productSourcingOrder.sourcingOrder)
    productSourcingOrders: ProductSourcingOrderEntity[];

    @AutoMap(()=>SourcingShipmentEntity)
    @OneToOne(type => SourcingShipmentEntity, sourcingShipment => sourcingShipment.sourcingOrder)
    sourcingShipment: SourcingShipmentEntity;

    @AutoMap(()=>SourcingPaymentEntity)
    @OneToMany(type => SourcingPaymentEntity, sourcingpayment => sourcingpayment.sourcingOrder)
    sourcingpayments: SourcingPaymentEntity[];
    
}