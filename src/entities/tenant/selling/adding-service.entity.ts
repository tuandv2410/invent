import { BaseEntity, Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { AutoMap } from "nestjsx-automapper";
import { ReceiptEntity } from "./receipt.entity";
import { ServiceType } from "src/enum/service-type.enum";
import { SellingBusinessContractEntity } from "./selling-business-contract.entity";

@Entity('adding-service')
export class AddingServiceEntity extends BaseEntity {
    @AutoMap()
    @PrimaryColumn()
    id: string;

    @AutoMap()
    @Column({
        nullable: false,
    })
    startDate: string;
    @AutoMap()
    @Column({
        nullable: false,
    })
    price: number;



    @AutoMap()
    @Column({
        nullable: false,
    })
    type: ServiceType

    @AutoMap()
    @Column({
        nullable: false,
    })
    description: string

    @ManyToOne(type => SellingBusinessContractEntity, sellingBusinessContract => sellingBusinessContract.addingServices, {
        cascade: true
    })
    sellingBusinessContract: SellingBusinessContractEntity;
}