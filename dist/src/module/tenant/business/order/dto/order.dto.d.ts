import { PaymentStatus } from 'src/module/tenant/business/enum/payment-status.enum';
import { ShipmentStatus } from 'src/module/tenant/business/enum/shipment-status.enum';
declare class shipment {
    id: string;
    value: number;
    status: ShipmentStatus;
    deliveryDate: string;
}
declare class payment {
    id: string;
    value: number;
    status: PaymentStatus;
    date: string;
}
declare class productOrder {
    id: string;
    quantity: number;
    totalPrice: number;
    discount: number;
    currency: string;
}
export declare class OrderDto {
    id: string;
    createDate: string;
    payments: payment[];
    shipment: shipment;
    productOrders: productOrder[];
}
export {};
