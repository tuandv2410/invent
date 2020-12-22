import { DeleteResultInterface } from 'src/interfaces/delete-result.interface';
import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { Mapper } from '@nartc/automapper'
import { v4 as uuid } from 'uuid'
import { ProductService } from './product.service';
import { FilterGetProductDto } from './dto/filter-get-product.dto';
import { ProductDto } from './dto/product.dto';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductSearchService } from 'src/search/search-service/product.search.service';
import { plainToClass } from 'class-transformer';
import { ProductEntity } from 'src/entities/inventory/product.entity';
import { ProductSearchBody } from 'src/search/search-body/product-search-body.interface';

@Controller('product')
export class ProductController {
    constructor(
        private readonly service: ProductService,
        private searchService: ProductSearchService
    ) {}
  
    @Get()
    async get(
        @Body() filterDto: FilterGetProductDto
    ): Promise<ProductDto[]> {
        const result = await this.service.get(filterDto)
        return Mapper.mapArray(result,ProductDto);
    }

    @Get('/getWithRelations')
    async getWithRelations(
        @Body() filterDto: FilterGetProductDto
    ): Promise<ProductDto[]> {
        const result = await this.service.getWithRelations(filterDto)
        return Mapper.mapArray(result,ProductDto);
    }
  
    @Post()
    async create(
        @Body() userData: CreateProductDto
    ): Promise<ProductDto> {

        const id = uuid();
        const data = {id , ...userData};
        const storeData = await this.service.store(data) 
        const result = plainToClass(ProductEntity,storeData);
        await this.searchService.indexDocument(id,Mapper.map(result,ProductSearchBody))
        return Mapper.map(result,ProductDto);
    }

    @Put('/:id')
    async update(
        @Param('id') id: string,
        @Body() userData: UpdateProductDto
    ): Promise<ProductDto> {
        const result = await this.service.update(id, userData)
        this.searchService.updateDocument(id,Mapper.map(result,ProductSearchBody))
        return Mapper.map(result,ProductDto);
    }
  
    @Delete('/:id')
    async destroy(
        @Param('id') id: string
    ): Promise<DeleteResultInterface> {
        this.searchService.deleteDocument(id)
        return this.service.delete(id)
    }

    @Get('/testSearch')
    async searchForProducts(
        @Query('search') search: string
    ) {
        const  body = await this.searchService.find(search);
        const Products = body.hits.hits;
        return Products.map((item) => item._source);
    }
}
