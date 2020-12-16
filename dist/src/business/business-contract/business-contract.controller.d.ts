import { BusinessContractService } from './business-contract.service';
import { FilterGetBusinessContractDto } from './dto/filter-get-business-contract.dto';
import { BusinessContractDto } from './dto/business-contract.dto';
import { CreateBusinessContractDto } from './dto/create-business-contract.dto';
import { InsertResult } from 'typeorm';
import { UpdateBusinessContractDto } from './dto/update-business-contract.dto';
import { DeleteResultInterface } from 'src/interfaces/delete-result.interface';
import { BusinessPartnerService } from '../business-partner/business-partner.service';
export declare class BusinessContractController {
    private readonly service;
    private readonly bpService;
    constructor(service: BusinessContractService, bpService: BusinessPartnerService);
    get(filterDto: FilterGetBusinessContractDto): Promise<BusinessContractDto[]>;
    getWithRelations(filterDto: FilterGetBusinessContractDto): Promise<BusinessContractDto[]>;
    create(userData: CreateBusinessContractDto): Promise<InsertResult>;
    update(id: string, userData: UpdateBusinessContractDto): Promise<BusinessContractDto>;
    destroy(id: string): Promise<DeleteResultInterface>;
}
