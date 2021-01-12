declare class ProductSourcingContract {
    id: string;
    quantity: number;
    totalPrice: number;
    discount: number;
    currency: string;
}
declare class ProductSourcingOrder {
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
    productSourcingContracts: ProductSourcingContract[];
    productSourcingOrders: ProductSourcingOrder[];
}
export {};
