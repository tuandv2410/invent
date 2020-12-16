import { DeleteResultInterface } from 'src/interfaces/delete-result.interface';
import { InsertResult } from 'typeorm';
import { ProductContractService } from './product-contract.service';
import { FilterGetProductContractDto } from './dto/filter-get-product-contract.dto';
import { ProductContractDto } from './dto/product-contract.dto';
import { CreateProductContractDto } from './dto/create-product-contract.dto';
import { UpdateProductContractDto } from './dto/update-product-contract.dto';
export declare class ProductContractController {
    private readonly service;
    constructor(service: ProductContractService);
    get(filterDto: FilterGetProductContractDto): Promise<ProductContractDto[]>;
    getWithRelations(filterDto: FilterGetProductContractDto): Promise<ProductContractDto[]>;
    create(userData: CreateProductContractDto): Promise<InsertResult>;
    update(id: string, userData: UpdateProductContractDto): Promise<ProductContractDto>;
    destroy(id: string): Promise<DeleteResultInterface>;
}
