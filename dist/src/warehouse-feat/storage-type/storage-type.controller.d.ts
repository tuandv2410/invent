import { DeleteResultInterface } from 'src/interfaces/delete-result.interface';
import { InsertResult } from 'typeorm';
import { StorageTypeService } from './storage-type.service';
import { FilterGetStorageTypeDto } from './dto/filter-get-storage-type.dto';
import { StorageTypeDto } from './dto/storage-type.dto';
import { CreateStorageTypeDto } from './dto/create-storage-type.dto';
import { UpdateStorageTypeDto } from './dto/update-storage-type.dto';
export declare class StorageTypeController {
    private readonly service;
    constructor(service: StorageTypeService);
    get(filterDto: FilterGetStorageTypeDto): Promise<StorageTypeDto[]>;
    getWithRelations(filterDto: FilterGetStorageTypeDto): Promise<StorageTypeDto[]>;
    create(userData: CreateStorageTypeDto): Promise<InsertResult>;
    update(id: string, userData: UpdateStorageTypeDto): Promise<StorageTypeDto>;
    destroy(id: string): Promise<DeleteResultInterface>;
}
