import { BpCategory } from 'src/enum/bp-category.enum';
import { BpFunction } from 'src/enum/bp-function.enum';
import { BpStatus } from 'src/enum/bp-status.enum';
declare class SellingBusinessContract {
    id: string;
    createDate: string;
    moneyValue: number;
}
declare class SourcingBusinessContract {
    id: string;
    createDate: string;
    moneyValue: number;
}
export declare class BusinessPartnerDto {
    id: string;
    fullName: string;
    address: string;
    taxInfo: string;
    phone: string;
    email: string;
    discount: number;
    category: BpCategory;
    function: BpFunction;
    status: BpStatus;
    sellingBusinessContracts: SellingBusinessContract[];
    sourcingBusinessContracts: SourcingBusinessContract[];
}
export {};
