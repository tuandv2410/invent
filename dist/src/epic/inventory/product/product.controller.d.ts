import { DeleteResultInterface } from 'src/interfaces/delete-result.interface';
import { ProductService } from './product.service';
import { FilterGetProductDto } from './dto/filter-get-product.dto';
import { ProductDto } from './dto/product.dto';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductSearchService } from 'src/search/search-service/product.search.service';
export declare class ProductController {
    private readonly service;
    private searchService;
    constructor(service: ProductService, searchService: ProductSearchService);
    get(filterDto: FilterGetProductDto): Promise<ProductDto[]>;
    getWithRelations(filterDto: FilterGetProductDto): Promise<ProductDto[]>;
    create(userData: CreateProductDto): Promise<ProductDto>;
    update(id: string, userData: UpdateProductDto): Promise<ProductDto>;
    destroy(id: string): Promise<DeleteResultInterface>;
    searchForProducts(search: string): Promise<any>;
}
