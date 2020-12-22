import { BpCategory } from 'src/epic/business/enum/bp-category.enum';
import { BpFunction } from 'src/epic/business/enum/bp-function.enum';
import { BpStatus } from 'src/epic/business/enum/bp-status.enum';
declare class BusinessContract {
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
    businessContracts: BusinessContract[];
}
export {};
