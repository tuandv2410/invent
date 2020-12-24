import { DeleteResultInterface } from 'src/interfaces/delete-result.interface';
import { InsertResult } from 'typeorm';
import { StorageBinService } from './storage-bin.service';
import { FilterGetStorageBinDto } from './dto/filter-get-storage-bin.dto';
import { StorageBinDto } from './dto/storage-bin.dto';
import { CreateStorageBinDto } from './dto/create-storage-bin.dto';
import { UpdateStorageBinDto } from './dto/update-storage-bin.dto';
export declare class StorageBinController {
    private readonly service;
    constructor(service: StorageBinService);
    get(filterDto: FilterGetStorageBinDto): Promise<StorageBinDto[]>;
    getWithRelations(filterDto: FilterGetStorageBinDto): Promise<StorageBinDto[]>;
    create(userData: CreateStorageBinDto): Promise<InsertResult>;
    update(id: string, userData: UpdateStorageBinDto): Promise<StorageBinDto>;
    destroy(id: string): Promise<DeleteResultInterface>;
}
