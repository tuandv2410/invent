declare class ProductContract {
    id: string;
    quantity: number;
    totalPrice: number;
    discount: number;
    currency: string;
}
declare class productOrder {
    id: string;
    quantity: number;
    totalPrice: number;
    discount: number;
    currency: string;
}
export declare class SkuDto {
    id: string;
    productName: string;
    productId: string;
    expireDate: string;
    unitPrice: number;
    currency: string;
    quantity: number;
    productContracts: ProductContract[];
    productOrders: productOrder[];
}
export {};
