import { DeleteResultInterface } from 'src/interfaces/delete-result.interface';
import { InsertResult } from 'typeorm';
import { OrganizationService } from './organization.service';
import { FilterGetOrganizationDto } from './dto/filter-get-organization.dto';
import { OrganizationDto } from './dto/organization.dto';
import { CreateOrganizationDto } from './dto/create-organization.dto';
import { UpdateOrganizationDto } from './dto/update-organization.dto';
export declare class OrganizationController {
    private readonly service;
    constructor(service: OrganizationService);
    get(filterDto: FilterGetOrganizationDto): Promise<OrganizationDto[]>;
    getWithRelations(filterDto: FilterGetOrganizationDto): Promise<OrganizationDto[]>;
    create(userData: CreateOrganizationDto): Promise<InsertResult>;
    update(id: string, userData: UpdateOrganizationDto): Promise<OrganizationDto>;
    destroy(id: string): Promise<DeleteResultInterface>;
}
