import { BpCategory } from 'src/module/tenant/business/enum/bp-category.enum';
import { BpFunction } from 'src/module/tenant/business/enum/bp-function.enum';
import { BpStatus } from 'src/module/tenant/business/enum/bp-status.enum';
export declare class CreateBusinessPartnerDto {
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
