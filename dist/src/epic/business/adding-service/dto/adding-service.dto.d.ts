import { ServiceType } from 'src/epic/business/enum/adding-service.enum';
declare class Order {
    id: string;
    createDate: string;
}
export declare class AddingServiceDto {
    id: string;
    price: number;
    description: string;
    type: ServiceType;
    orders: Order[];
}
export {};
