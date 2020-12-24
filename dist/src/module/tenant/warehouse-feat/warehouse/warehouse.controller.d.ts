import { DeleteResultInterface } from 'src/interfaces/delete-result.interface';
import { InsertResult } from 'typeorm';
import { WarehouseService } from './warehouse.service';
import { FilterGetWarehouseDto } from './dto/filter-get-warehouse.dto';
import { WarehouseDto } from './dto/warehouse.dto';
import { CreateWarehouseDto } from './dto/create-warehouse.dto';
import { UpdateWarehouseDto } from './dto/update-warehouse.dto';
export declare class WarehouseController {
    private readonly service;
    constructor(service: WarehouseService);
    get(filterDto: FilterGetWarehouseDto): Promise<WarehouseDto[]>;
    getWithRelations(filterDto: FilterGetWarehouseDto): Promise<WarehouseDto[]>;
    create(userData: CreateWarehouseDto): Promise<InsertResult>;
    update(id: string, userData: UpdateWarehouseDto): Promise<WarehouseDto>;
    destroy(id: string): Promise<DeleteResultInterface>;
}
