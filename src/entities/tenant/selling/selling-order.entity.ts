import { BaseEntity, Column, Entity, ManyToOne, OneToMany, OneToOne, PrimaryColumn } from "typeorm";
import { AutoMap } from "nestjsx-automapper";
import { SellingBusinessContractEntity } from "./selling-business-contract.entity";
import { ProductSellingOrderEntity } from "./product-selling-order.entity";
import { SellingShipmentEntity } from "./selling-shipment.entity";
import { SellingPaymentEntity } from "./selling-payment.entity";

@Entity('selling-order')
export class SellingOrderEntity extends BaseEntity {
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
    
    @ManyToOne(type => SellingBusinessContractEntity, sellingBusinessContract => sellingBusinessContract.sellingOrders, {
        cascade: true
    })
    sellingBusinessContract: SellingBusinessContractEntity;

    @AutoMap(()=>ProductSellingOrderEntity)
    @OneToMany(type => ProductSellingOrderEntity, productSellingOrder => productSellingOrder.sellingOrder)
    productSellingOrders: ProductSellingOrderEntity[];

    @AutoMap(()=>SellingShipmentEntity)
    @OneToOne(type => SellingShipmentEntity, sellingShipment => sellingShipment.sellingOrder)
    sellingShipment: SellingShipmentEntity;

    @AutoMap(()=>SellingPaymentEntity)
    @OneToMany(type => SellingPaymentEntity, sellingpayment => sellingpayment.sellingOrder)
    sellingpayments: SellingPaymentEntity[];
    
}