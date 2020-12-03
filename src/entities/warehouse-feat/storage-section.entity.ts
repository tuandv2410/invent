import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { AutoMap } from "nestjsx-automapper";

@Entity('storage-section')
export class StorageSectionEntity extends BaseEntity {
    @AutoMap()
    @PrimaryGeneratedColumn()
    id: number;

    @AutoMap()
    @Column({
        type: 'varchar',
        nullable: false,
    })
    description: string;
}