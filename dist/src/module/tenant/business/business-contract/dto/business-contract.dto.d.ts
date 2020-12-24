declare class Order {
    id: string;
    createDate: string;
}
declare class ProductContract {
    id: string;
    quantity: number;
    totalPrice: number;
    discount: number;
    currency: string;
}
export declare class BusinessContractDto {
    id: string;
    createDate: string;
    moneyValue: number;
    orders: Order[];
    productContracts: ProductContract[];
}
export {};
