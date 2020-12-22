import { DeleteResultInterface } from 'src/interfaces/delete-result.interface';
import { InsertResult } from 'typeorm';
import { PackageSpecificationService } from './package-specification.service';
import { FilterGetPackageSpecificationDto } from './dto/filter-get-package-specification.dto';
import { PackageSpecificationDto } from './dto/package-specification.dto';
import { CreatePackageSpecificationDto } from './dto/create-package-specification.dto';
import { UpdatePackageSpecificationDto } from './dto/update-package-specification.dto';
export declare class PackageSpecificationController {
    private readonly service;
    constructor(service: PackageSpecificationService);
    get(filterDto: FilterGetPackageSpecificationDto): Promise<PackageSpecificationDto[]>;
    getWithRelations(filterDto: FilterGetPackageSpecificationDto): Promise<PackageSpecificationDto[]>;
    create(userData: CreatePackageSpecificationDto): Promise<InsertResult>;
    update(id: string, userData: UpdatePackageSpecificationDto): Promise<PackageSpecificationDto>;
    destroy(id: string): Promise<DeleteResultInterface>;
}
