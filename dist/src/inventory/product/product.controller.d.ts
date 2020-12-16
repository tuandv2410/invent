import { DeleteResultInterface } from 'src/interfaces/delete-result.interface';
import { InsertResult } from 'typeorm';
import { ProductService } from './product.service';
import { FilterGetProductDto } from './dto/filter-get-product.dto';
import { ProductDto } from './dto/product.dto';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
export declare class ProductController {
    private readonly service;
    constructor(service: ProductService);
    get(filterDto: FilterGetProductDto): Promise<ProductDto[]>;
    getWithRelations(filterDto: FilterGetProductDto): Promise<ProductDto[]>;
    create(userData: CreateProductDto): Promise<InsertResult>;
    update(id: string, userData: UpdateProductDto): Promise<ProductDto>;
    destroy(id: string): Promise<DeleteResultInterface>;
}
