declare class Order {
    id: string;
    createDate: string;
}
declare class Sku {
    id: string;
    productName: string;
    expireDate: string;
    unitPrice: number;
    currency: string;
    quantity: number;
}
export declare class ProductOrderDto {
    id: string;
    order: Order;
    sku: Sku;
    quantity: number;
    totalPrice: number;
    discount: number;
    currency: string;
}
export {};
