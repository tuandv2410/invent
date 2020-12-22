import { DeleteResultInterface } from 'src/interfaces/delete-result.interface';
import { InsertResult } from 'typeorm';
import { PackgingMaterialService } from './packging-material.service';
import { FilterGetPackgingMaterialDto } from './dto/filter-get-packging-material.dto';
import { PackgingMaterialDto } from './dto/packging-material.dto';
import { CreatePackgingMaterialDto } from './dto/create-packging-material.dto';
import { UpdatePackgingMaterialDto } from './dto/update-packging-material.dto';
export declare class PackgingMaterialController {
    private readonly service;
    constructor(service: PackgingMaterialService);
    get(filterDto: FilterGetPackgingMaterialDto): Promise<PackgingMaterialDto[]>;
    getWithRelations(filterDto: FilterGetPackgingMaterialDto): Promise<PackgingMaterialDto[]>;
    create(userData: CreatePackgingMaterialDto): Promise<InsertResult>;
    update(id: string, userData: UpdatePackgingMaterialDto): Promise<PackgingMaterialDto>;
    destroy(id: string): Promise<DeleteResultInterface>;
}
