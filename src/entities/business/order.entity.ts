import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { AutoMap } from "nestjsx-automapper";

@Entity('order')
export class OrderEntity extends BaseEntity {
    @AutoMap()
    @PrimaryGeneratedColumn()
    id: number;

    @AutoMap()
    @Column()
    create_date: string;
}