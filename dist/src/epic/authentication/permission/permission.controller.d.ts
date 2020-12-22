import { DeleteResultInterface } from 'src/interfaces/delete-result.interface';
import { InsertResult } from 'typeorm';
import { CreatePermissionDto } from './dto/create-permission.dto';
import { PermissionDto } from './dto/permission.dto';
import { PermissionService } from './permission.service';
import { FilterGetPermissionDto } from './dto/filter-get-permission.dto';
import { UpdatePermissionDto } from './dto/update-permission.dto';
export declare class PermissionController {
    private readonly service;
    constructor(service: PermissionService);
    get(filterDto: FilterGetPermissionDto): Promise<PermissionDto[]>;
    getWithRelations(filterDto: FilterGetPermissionDto): Promise<PermissionDto[]>;
    create(userData: CreatePermissionDto): Promise<InsertResult>;
    update(id: string, userData: UpdatePermissionDto): Promise<PermissionDto>;
    destroy(id: string): Promise<DeleteResultInterface>;
}
