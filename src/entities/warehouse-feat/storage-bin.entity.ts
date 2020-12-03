import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { AutoMap } from "nestjsx-automapper";
import { BinType } from "src/warehouse-feat/enum/bin-type.enum";

@Entity('storage-bin')
export class StorageBinEntity extends BaseEntity {
    @AutoMap()
    @PrimaryGeneratedColumn()
    id: number;

    @AutoMap()
    @Column({
        type: 'varchar',
        nullable: false,
    })
    maxWeight: number;

    @AutoMap()
    @Column({
        type: 'varchar',
        nullable: false,
    })
    totalCapicity: number;

    @AutoMap()
    @Column({
        type: 'varchar',
        nullable: false,
    })
    type: BinType;

}