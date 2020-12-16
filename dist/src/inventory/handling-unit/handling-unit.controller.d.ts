import { DeleteResultInterface } from 'src/interfaces/delete-result.interface';
import { InsertResult } from 'typeorm';
import { HandlingUnitService } from './handling-unit.service';
import { FilterGetHandlingUnitDto } from './dto/filter-get-handling-unit.dto';
import { HandlingUnitDto } from './dto/handling-unit.dto';
import { CreateHandlingUnitDto } from './dto/create-handling-unit.dto';
import { UpdateHandlingUnitDto } from './dto/update-handling-unit.dto';
export declare class HandlingUnitController {
    private readonly service;
    constructor(service: HandlingUnitService);
    get(filterDto: FilterGetHandlingUnitDto): Promise<HandlingUnitDto[]>;
    getWithRelations(filterDto: FilterGetHandlingUnitDto): Promise<HandlingUnitDto[]>;
    create(userData: CreateHandlingUnitDto): Promise<InsertResult>;
    update(id: string, userData: UpdateHandlingUnitDto): Promise<HandlingUnitDto>;
    destroy(id: string): Promise<DeleteResultInterface>;
}
