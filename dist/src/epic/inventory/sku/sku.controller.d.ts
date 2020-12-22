import { DeleteResultInterface } from 'src/interfaces/delete-result.interface';
import { InsertResult } from 'typeorm';
import { SkuService } from './sku.service';
import { FilterGetSkuDto } from './dto/filter-get-sku.dto';
import { SkuDto } from './dto/sku.dto';
import { CreateSkuDto } from './dto/create-sku.dto';
import { UpdateSkuDto } from './dto/update-sku.dto';
export declare class SkuController {
    private readonly service;
    constructor(service: SkuService);
    get(filterDto: FilterGetSkuDto): Promise<SkuDto[]>;
    getWithRelations(filterDto: FilterGetSkuDto): Promise<SkuDto[]>;
    create(userData: CreateSkuDto): Promise<InsertResult>;
    update(id: string, userData: UpdateSkuDto): Promise<SkuDto>;
    destroy(id: string): Promise<DeleteResultInterface>;
}
