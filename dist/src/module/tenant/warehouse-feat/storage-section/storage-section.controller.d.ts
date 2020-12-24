import { DeleteResultInterface } from 'src/interfaces/delete-result.interface';
import { InsertResult } from 'typeorm';
import { StorageSectionService } from './storage-section.service';
import { FilterGetStorageSectionDto } from './dto/filter-get-storage-section.dto';
import { StorageSectionDto } from './dto/storage-section.dto';
import { CreateStorageSectionDto } from './dto/create-storage-section.dto';
import { UpdateStorageSectionDto } from './dto/update-storage-section.dto';
export declare class StorageSectionController {
    private readonly service;
    constructor(service: StorageSectionService);
    get(filterDto: FilterGetStorageSectionDto): Promise<StorageSectionDto[]>;
    getWithRelations(filterDto: FilterGetStorageSectionDto): Promise<StorageSectionDto[]>;
    create(userData: CreateStorageSectionDto): Promise<InsertResult>;
    update(id: string, userData: UpdateStorageSectionDto): Promise<StorageSectionDto>;
    destroy(id: string): Promise<DeleteResultInterface>;
}
