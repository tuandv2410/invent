import { BaseEntity, Column, Entity, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { AutoMap } from "nestjsx-automapper";
import { StorageTypeEntity } from "./storage-type.entity";
import { ActivityAreaEntity } from "./activity-area.entity"

@Entity('warehouse')
export class WarehouseEntity extends BaseEntity {
    @AutoMap()
    @PrimaryColumn()
    id: string;

    @AutoMap()
    @Column()
    name: string;
    
    @AutoMap()
    @Column({
        type: 'varchar',
        nullable: false,
    })
    location: string;


    @AutoMap(()=>StorageTypeEntity)
    @OneToMany(type => StorageTypeEntity, storageType => storageType.warehouse)
    storageTypes: StorageTypeEntity[];

    @AutoMap(()=>ActivityAreaEntity)
    @OneToMany(type => ActivityAreaEntity, activityArea => activityArea.warehouse)
    activityAreas: ActivityAreaEntity[];
}