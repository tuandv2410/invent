declare class BusinessContract {
    id: string;
    createDate: string;
    moneyValue: number;
}
declare class Sku {
    id: string;
    productName: string;
    expireDate: string;
    unitPrice: number;
    currency: string;
    quantity: number;
}
export declare class ProductContractDto {
    id: string;
    sku: Sku;
    businessContract: BusinessContract;
    quantity: number;
    totalPrice: number;
    discount: number;
    currency: string;
}
export {};
