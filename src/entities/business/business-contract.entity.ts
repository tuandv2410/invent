import { BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryColumn} from "typeorm";
import { AutoMap } from "nestjsx-automapper";
import { BusinessPartnerEntity } from "./business-partner.entity";
import { OrderEntity } from "./order.entity";
import { ProductContractEntity } from "./product-contract.entity";

@Entity('business-contract')
export class BusinessContractEntity extends BaseEntity {
    @AutoMap()
    @PrimaryColumn()
    id: string;

    @AutoMap()
    @Column()
    createDate: string;

    @AutoMap()
    @Column()
    moneyValue: number;

    @ManyToOne(type => BusinessPartnerEntity, businessPartner => businessPartner.businessContracts, {
        cascade: true
    })
    businessPartner: BusinessPartnerEntity;

    @AutoMap(()=>OrderEntity)
    @OneToMany(type => OrderEntity, order => order.businessContract)
    orders: OrderEntity[];

    @AutoMap(()=>ProductContractEntity)
    @OneToMany(type => ProductContractEntity, productContract => productContract.businessContract)
    productContracts: ProductContractEntity[];

}