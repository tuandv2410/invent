import { BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { AutoMap } from "nestjsx-automapper";
import { ActArea } from "src/warehouse-feat/enum/activity-area.enum";
import { WarehouseEntity } from "./warehouse.entity";
import { StorageBinEntity } from "./storage-bin.entity";

@Entity('activity-area')
export class ActivityAreaEntity extends BaseEntity {
    @AutoMap()
    @PrimaryColumn()
    id: string;

    @AutoMap()
    @Column({
        type: 'varchar',
        nullable: false,
    })
    activity: ActArea;

    @ManyToOne(type => WarehouseEntity, warehouse => warehouse.activityAreas, {
        cascade: true
    })
    warehouse: WarehouseEntity;

    @AutoMap(()=>StorageBinEntity)
    @OneToMany(type => StorageBinEntity, storageBin => storageBin.activityArea)
    storageBins: StorageBinEntity[];

}