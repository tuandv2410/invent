import { DeleteResultInterface } from 'src/interfaces/delete-result.interface';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { InsertResult } from 'typeorm';
import { Mapper } from '@nartc/automapper'
import { v4 as uuid } from 'uuid'
import { ProductOrderService } from './product-order.service';
import { FilterGetProductOrderDto } from './dto/filter-get-product-order.dto';
import { ProductOrderDto } from './dto/product-order.dto';
import { CreateProductOrderDto } from './dto/create-product-order.dto';
import { UpdateProductOrderDto } from './dto/update-product-order.dto';

@Controller('product-order')
export class ProductOrderController {
    constructor(
        private readonly service: ProductOrderService
    ) {}
  
    @Get()
    async get(
        @Body() filterDto: FilterGetProductOrderDto
    ): Promise<ProductOrderDto[]> {
        const result = await this.service.get(filterDto)
        return Mapper.mapArray(result,ProductOrderDto);
    }

    @Get('/getWithRelations')
    async getWithRelations(
        @Body() filterDto: FilterGetProductOrderDto
    ): Promise<ProductOrderDto[]> {
        const result = await this.service.getWithRelations(filterDto)
        return Mapper.mapArray(result,ProductOrderDto);
    }
  
    @Post()
    async create(
        @Body() userData: CreateProductOrderDto
    ): Promise<InsertResult> {

        const id = uuid();
        const data = {id , ...userData};
        return await this.service.store(data) 
    }

    @Put('/:id')
    async update(
        @Param('id') id: string,
        @Body() userData: UpdateProductOrderDto
    ): Promise<ProductOrderDto> {
        const result = await this.service.update(id, userData)
        return Mapper.map(result,ProductOrderDto);
    }
  
    @Delete('/:id')
    async destroy(
        @Param('id') id: string
    ): Promise<DeleteResultInterface> {
        return this.service.delete(id)
    }
}
