import { BaseEntity, Column, Entity, ManyToOne, PrimaryColumn} from "typeorm";
import { AutoMap } from "nestjsx-automapper";
import { BusinessContractEntity } from "./business-contract.entity";
import { SkuEntity } from "../inventory/sku.entity";

@Entity('product-contract')
export class ProductContractEntity extends BaseEntity {
    @AutoMap()
    @PrimaryColumn()
    id: string;

    @AutoMap()
    @Column()
    quantity: number;

    @AutoMap()
    @Column()
    totalPrice: number;

    @AutoMap()
    @Column()
    discount: number;

    @AutoMap()
    @Column()
    currency: string;

    @ManyToOne(type => BusinessContractEntity, businessContract => businessContract.productContracts, {
        cascade: true
    })
    businessContract: BusinessContractEntity;

    @ManyToOne(type => SkuEntity, sku => sku.productContracts, {
        cascade: true
    })
    sku: SkuEntity;
}