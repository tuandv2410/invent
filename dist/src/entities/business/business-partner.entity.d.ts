import { BaseEntity } from "typeorm";
import { BpCategory } from "src/business/enum/bp-category.enum";
import { BpFunction } from "src/business/enum/bp-function.enum";
import { BpStatus } from "src/business/enum/bp-status.enum";
import { BusinessContractEntity } from "./business-contract.entity";
export declare class BusinessPartnerEntity extends BaseEntity {
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
    businessContracts: BusinessContractEntity[];
}
