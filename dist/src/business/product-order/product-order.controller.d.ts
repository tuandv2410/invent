import { DeleteResultInterface } from 'src/interfaces/delete-result.interface';
import { InsertResult } from 'typeorm';
import { ProductOrderService } from './product-order.service';
import { FilterGetProductOrderDto } from './dto/filter-get-product-order.dto';
import { ProductOrderDto } from './dto/product-order.dto';
import { CreateProductOrderDto } from './dto/create-product-order.dto';
import { UpdateProductOrderDto } from './dto/update-product-order.dto';
export declare class ProductOrderController {
    private readonly service;
    constructor(service: ProductOrderService);
    get(filterDto: FilterGetProductOrderDto): Promise<ProductOrderDto[]>;
    getWithRelations(filterDto: FilterGetProductOrderDto): Promise<ProductOrderDto[]>;
    create(userData: CreateProductOrderDto): Promise<InsertResult>;
    update(id: string, userData: UpdateProductOrderDto): Promise<ProductOrderDto>;
    destroy(id: string): Promise<DeleteResultInterface>;
}
