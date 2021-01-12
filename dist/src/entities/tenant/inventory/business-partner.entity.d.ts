import { BaseEntity } from "typeorm";
import { BpCategory } from "src/enum/bp-category.enum";
import { BpFunction } from "src/enum/bp-function.enum";
import { BpStatus } from "src/enum/bp-status.enum";
import { SourcingBusinessContractEntity } from "../sourcing/sourcing-business-contract.entity";
import { SellingBusinessContractEntity } from "../selling/selling-business-contract.entity";
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
    sourcingBusinessContracts: SourcingBusinessContractEntity[];
    sellingBusinessContracts: SellingBusinessContractEntity[];
}
