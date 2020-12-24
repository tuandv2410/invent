import { BaseEntity, Column, Entity, OneToMany, PrimaryColumn} from "typeorm";
import { AutoMap } from "nestjsx-automapper";
import { OrderEntity } from "./order.entity";
import { ServiceType } from "src/module/tenant/business/enum/adding-service.enum";

@Entity('adding-service')
export class AddingServiceEntity extends BaseEntity {
    @AutoMap()
    @PrimaryColumn()
    id: string;

    @AutoMap()
    @Column({
        nullable: false,
    })
    price: number;

    @AutoMap()
    @Column({
        nullable: false,
    })
    description: string;

    @AutoMap()
    @Column({
        nullable: false,
    })
    type: ServiceType;

    @AutoMap(()=>OrderEntity)
    @OneToMany(type => OrderEntity, order => order.addingService)
    orders: OrderEntity[];

}