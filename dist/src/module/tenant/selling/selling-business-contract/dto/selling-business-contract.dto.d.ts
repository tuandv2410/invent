import { Period } from 'src/enum/period.enum';
declare class ProductSellingContract {
    id: string;
    quantity: number;
    totalPrice: number;
    discount: number;
    currency: string;
}
declare class Commission {
    id: string;
    value: number;
    currency: string;
    startDate: string;
    endDate: string;
    period: Period;
}
declare class SellingOrder {
    id: string;
    value: number;
    createDate: string;
    addingServiceType: string;
}
export declare class SellingBusinessContractDto {
    id: string;
    createdDate: string;
    moneyValue: number;
    productSellingContracts: ProductSellingContract[];
    commission: Commission;
    sellingOrders: SellingOrder[];
}
export {};
