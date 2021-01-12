import { BpCategory } from 'src/enum/bp-category.enum';
import { BpFunction } from 'src/enum/bp-function.enum';
import { BpStatus } from 'src/enum/bp-status.enum';
export declare class FilterGetBusinessPartnerDto {
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
}
