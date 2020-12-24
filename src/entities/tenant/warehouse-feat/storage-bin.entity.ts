import { BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { AutoMap } from "nestjsx-automapper";
import { BinType } from "src/module/tenant/warehouse-feat/enum/bin-type.enum";
import { StorageTypeEntity } from "./storage-type.entity";
import { StorageSectionEntity } from "./storage-section.entity";
import { ActivityAreaEntity } from "./activity-area.entity";
import { SkuEntity } from "../inventory/sku.entity";

@Entity('storage-bin')
export class StorageBinEntity extends BaseEntity {
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
    maxWeight: number;

    @AutoMap()
    @Column({
        nullable: false,
    })
    totalCapicity: number;

    @AutoMap()
    @Column({
        nullable: false,
    })
    type: BinType;

    @ManyToOne(type => StorageTypeEntity, storageType => storageType.storageBins, {
        cascade: true
    })
    storageType: StorageTypeEntity;

    @ManyToOne(type => StorageSectionEntity, storageSection => storageSection.storageBins, {
        cascade: true
    })
    storageSection: StorageSectionEntity;

    @ManyToOne(type => ActivityAreaEntity, activityArea => activityArea.storageBins, {
        cascade: true
    })
    activityArea: ActivityAreaEntity;

    @AutoMap(()=>SkuEntity)
    @OneToMany(type => SkuEntity, sku => sku.storageBin)
    skus: SkuEntity[];

}