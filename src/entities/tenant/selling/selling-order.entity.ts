import { BaseEntity, Column, Entity, ManyToOne, OneToMany, OneToOne, PrimaryColumn } from "typeorm";
import { AutoMap } from "nestjsx-automapper";
import { SellingBusinessContractEntity } from "./selling-business-contract.entity";
import { ProductSellingOrderEntity } from "./product-selling-order.entity";
import { SellingShipmentEntity } from "./selling-shipment.entity";
import { SellingPaymentEntity } from "./selling-payment.entity";

@Entity('selling-order')
export class SellingOrderEntity extends BaseEntity {
    @PrimaryColumn()
    id: string;

    @Column({
        nullable: false,
    })
    createdDate: string;

    @Column({
        nullable: true,
    })
    value: number;

    @Column({
        nullable: true,
    })
    addingServiceType: string;
    
    @ManyToOne(type => SellingBusinessContractEntity, sellingBusinessContract => sellingBusinessContract.sellingOrders, {
        cascade: true
    })
    sellingBusinessContract: SellingBusinessContractEntity;

    @OneToMany(type => ProductSellingOrderEntity, productSellingOrder => productSellingOrder.sellingOrder)
    productSellingOrders: ProductSellingOrderEntity[];

    @OneToOne(type => SellingShipmentEntity, sellingShipment => sellingShipment.sellingOrder)
    sellingShipment: SellingShipmentEntity;

    @OneToMany(type => SellingPaymentEntity, sellingpayment => sellingpayment.sellingOrder)
    sellingpayments: SellingPaymentEntity[];
    
}