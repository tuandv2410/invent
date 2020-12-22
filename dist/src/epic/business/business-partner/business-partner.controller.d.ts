import { BusinessPartnerService } from './business-partner.service';
import { FilterGetBusinessPartnerDto } from './dto/filter-get-business-partner.dto';
import { BusinessPartnerDto } from './dto/business-partner.dto';
import { CreateBusinessPartnerDto } from './dto/create-business-partner.dto';
import { UpdateBusinessPartnerDto } from './dto/update-business-partner.dto';
import { DeleteResultInterface } from 'src/interfaces/delete-result.interface';
import { InsertResult } from 'typeorm';
export declare class BusinessPartnerController {
    private readonly service;
    constructor(service: BusinessPartnerService);
    get(filterDto: FilterGetBusinessPartnerDto): Promise<BusinessPartnerDto[]>;
    getWithRelations(filterDto: FilterGetBusinessPartnerDto): Promise<BusinessPartnerDto[]>;
    create(userData: CreateBusinessPartnerDto): Promise<InsertResult>;
    update(id: string, userData: UpdateBusinessPartnerDto): Promise<BusinessPartnerDto>;
    destroy(id: string): Promise<DeleteResultInterface>;
}
