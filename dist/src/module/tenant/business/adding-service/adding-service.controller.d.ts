import { AddingServiceService } from './adding-service.service';
import { AddingServiceDto } from './dto/adding-service.dto';
import { FilterGetAddingServiceDto } from './dto/filter-get-adding-service.dto';
import { InsertResult } from 'typeorm';
import { CreateAddingServiceDto } from './dto/create-adding-service.dto';
import { UpdateAddingServiceDto } from './dto/update-adding-service.dto';
import { DeleteResultInterface } from 'src/interfaces/delete-result.interface';
export declare class AddingServiceController {
    private readonly service;
    constructor(service: AddingServiceService);
    get(filterDto: FilterGetAddingServiceDto): Promise<AddingServiceDto[]>;
    getWithRelations(filterDto: FilterGetAddingServiceDto): Promise<AddingServiceDto[]>;
    create(userData: CreateAddingServiceDto): Promise<InsertResult>;
    update(id: string, userData: UpdateAddingServiceDto): Promise<AddingServiceDto>;
    destroy(id: string): Promise<DeleteResultInterface>;
}
