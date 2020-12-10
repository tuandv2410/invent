import { DeleteResultInterface } from 'src/interfaces/delete-result.interface';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { InsertResult } from 'typeorm';
import { Mapper } from '@nartc/automapper'
import { v4 as uuid } from 'uuid'
import { ProductContractService } from './product-contract.service';
import { FilterGetProductContractDto } from './dto/filter-get-product-contract.dto';
import { ProductContractDto } from './dto/product-contract.dto';
import { CreateProductContractDto } from './dto/create-product-contract.dto';
import { UpdateProductContractDto } from './dto/update-product-contract.dto';

@Controller('product-contract')
export class ProductContractController {
    constructor(
        private readonly service: ProductContractService
    ) {}
  
    @Get()
    async get(
        @Body() filterDto: FilterGetProductContractDto
    ): Promise<ProductContractDto[]> {
        const result = await this.service.get(filterDto)
        return Mapper.mapArray(result,ProductContractDto);
    }

    @Get('/getWithRelations')
    async getWithRelations(
        @Body() filterDto: FilterGetProductContractDto
    ): Promise<ProductContractDto[]> {
        const result = await this.service.getWithRelations(filterDto)
        return Mapper.mapArray(result,ProductContractDto);
    }
  
    @Post()
    async create(
        @Body() userData: CreateProductContractDto
    ): Promise<InsertResult> {

        const id = uuid();
        const data = {id , ...userData};
        return await this.service.store(data) 
    }

    @Put('/:id')
    async update(
        @Param('id') id: string,
        @Body() userData: UpdateProductContractDto
    ): Promise<ProductContractDto> {
        const result = await this.service.update(id, userData)
        return Mapper.map(result,ProductContractDto);
    }
  
    @Delete('/:id')
    async destroy(
        @Param('id') id: string
    ): Promise<DeleteResultInterface> {
        return this.service.delete(id)
    }
}
