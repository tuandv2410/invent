import { BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { AutoMap } from "nestjsx-automapper";
import { StoType } from "src/warehouse-feat/enum/sto-type.enum";
import { WarehouseEntity } from "./warehouse.entity";
import { StorageSectionEntity } from "./storage-section.entity";
import { StorageBinEntity } from "./storage-bin.entity";

@Entity('storage-type')
export class StorageTypeEntity extends BaseEntity {
    @AutoMap()
    @PrimaryColumn()
    id: string;

    @AutoMap()
    @Column({
        nullable: false,
    })
    name: string;

    @AutoMap()
    @Column({
        nullable: false,
    })
    areaType: StoType;

    @ManyToOne(type => WarehouseEntity, warehouse => warehouse.storageTypes, {
        cascade: true
    })
    warehouse: WarehouseEntity;

    @AutoMap(()=>StorageSectionEntity)
    @OneToMany(type => StorageSectionEntity, storageSection => storageSection.storageType)
    storageSections: StorageSectionEntity[];

    @AutoMap(()=>StorageBinEntity)
    @OneToMany(type => StorageBinEntity, storageBin => storageBin.storageType)
    storageBins: StorageBinEntity[];
}