import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { AutoMap } from "nestjsx-automapper";
import { BpCategory } from "src/business/enum/bp-category.enum";
import { BpFunction } from "src/business/enum/bp-function.enum";

@Entity('business-partner')
export class BusinessPartnerEntity extends BaseEntity {
    @AutoMap()
    @PrimaryGeneratedColumn()
    id: number;

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


}