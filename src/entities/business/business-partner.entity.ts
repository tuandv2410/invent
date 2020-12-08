import { BaseEntity, Column, Entity, OneToMany, PrimaryColumn} from "typeorm";
import { AutoMap } from "nestjsx-automapper";
import { BpCategory } from "src/business/enum/bp-category.enum";
import { BpFunction } from "src/business/enum/bp-function.enum";
import { BpStatus } from "src/business/enum/bp-status.enum";
import { OrderEntity } from "./order.entity";
import { BusinessContractEntity } from "./business-contract.entity";

@Entity('business-partner')
export class BusinessPartnerEntity extends BaseEntity {
    @AutoMap()
    @PrimaryColumn()
    id: string;

    @AutoMap()
    @Column({
        type: 'varchar',
        nullable: false,
        unique: true
    })
    fullName: string;

    @AutoMap()
    @Column({
        type: 'varchar',
        nullable: false,
    })
    address: string;

    @AutoMap()
    @Column({
        type: 'varchar',
        nullable: false,
    })
    taxInfo: string;

    @AutoMap()
    @Column({
        type: 'varchar',
        nullable: false,
    })
    phone: string;

    @AutoMap()
    @Column({
        type: 'varchar',
        nullable: false,
    })
    email: string;

    @AutoMap()
    @Column({
        type: 'varchar',
        nullable: false,
    })
    discount: number;

    @AutoMap()
    @Column({
        type: 'varchar',
        nullable: false,
    })
    category: BpCategory;

    @AutoMap()
    @Column({
        type: 'varchar',
        nullable: false,
    })
    function: BpFunction;

    @AutoMap()
    @Column({
        type: 'varchar',
        nullable: false,
    })
    status: BpStatus;


    @AutoMap(()=>OrderEntity)
    @OneToMany(type => OrderEntity, order => order.businessPartner)
    orders: OrderEntity[];

    @AutoMap(()=>BusinessContractEntity)
    @OneToMany(type => BusinessContractEntity, businessContract => businessContract.businessPartner)
    businessContracts: BusinessContractEntity[];

}