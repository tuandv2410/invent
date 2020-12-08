import { DeleteResultInterface } from 'src/interfaces/delete-result.interface';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { InsertResult } from 'typeorm';
import { Mapper } from '@nartc/automapper'
import { v4 as uuid } from 'uuid'
import { ProductService } from './product.service';
import { FilterGetProductDto } from './dto/filter-get-product.dto';
import { ProductDto } from './dto/product.dto';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('product')
export class ProductController {
    constructor(
        private readonly service: ProductService
    ) {}
  
    @Get()
    async get(
        @Body() filterDto: FilterGetProductDto
    ): Promise<ProductDto[]> {
        const result = await this.service.get(filterDto)
        return Mapper.mapArray(result,ProductDto);
    }
  
    @Post()
    async create(
        @Body() userData: CreateProductDto
    ): Promise<InsertResult> {

        const id = uuid();
        const data = {id , ...userData};
        return await this.service.store(data) 
    }

    @Put('/:id')
    async update(
        @Param('id') id: string,
        @Body() userData: UpdateProductDto
    ): Promise<ProductDto> {
        const result = await this.service.update(id, userData)
        return Mapper.map(result,ProductDto);
    }
  
    @Delete('/:id')
    async destroy(
        @Param('id') id: string
    ): Promise<DeleteResultInterface> {
        return this.service.delete(id)
    }
}
