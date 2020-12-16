import { BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { AutoMap } from "nestjsx-automapper";
import { StorageTypeEntity } from "./storage-type.entity";
import { StorageBinEntity } from "./storage-bin.entity";

@Entity('storage-section')
export class StorageSectionEntity extends BaseEntity {
    @AutoMap()
    @PrimaryColumn()
    id: string;

    @AutoMap()
    @Column({
        nullable: false,
    })
    name: string;

    @ManyToOne(type => StorageTypeEntity, storageType => storageType.storageSections, {
        cascade: true
    })
    storageType: StorageTypeEntity;

    @AutoMap(()=>StorageBinEntity)
    @OneToMany(type => StorageBinEntity, storageBin => storageBin.storageSection)
    storageBins: StorageBinEntity[];
}