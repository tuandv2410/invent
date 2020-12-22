import { BaseEntity } from "typeorm";
import { OrderEntity } from "./order.entity";
import { ServiceType } from "src/epic/business/enum/adding-service.enum";
export declare class AddingServiceEntity extends BaseEntity {
    id: string;
    price: number;
    description: string;
    type: ServiceType;
    orders: OrderEntity[];
}
