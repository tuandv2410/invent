import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { AutoMap } from "nestjsx-automapper";
import { StoType } from "src/warehouse-feat/enum/sto-type.enum";

@Entity('storage-type')
export class StorageTypeEntity extends BaseEntity {
    @AutoMap()
    @PrimaryGeneratedColumn()
    id: number;

    @AutoMap()
    @Column({
        type: 'varchar',
        nullable: false,
    })
    areaType: StoType;
}