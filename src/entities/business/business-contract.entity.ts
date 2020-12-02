import { BaseEntity, Column, Entity, ObjectIdColumn } from "typeorm";
import { AutoMap } from "nestjsx-automapper";

@Entity('business-contract')
export class BusinessContractEntity extends BaseEntity {
    @AutoMap()
    @ObjectIdColumn()
    id: number;

    @AutoMap()
    @Column()
    create_date: string;

    @AutoMap()
    @Column()
    money_value: number;

}