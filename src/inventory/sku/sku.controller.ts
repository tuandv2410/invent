import { DeleteResultInterface } from 'src/interfaces/delete-result.interface';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { InsertResult } from 'typeorm';
import { Mapper } from '@nartc/automapper'
import { v4 as uuid } from 'uuid'
import { SkuService } from './sku.service';
import { FilterGetSkuDto } from './dto/filter-get-sku.dto';
import { SkuDto } from './dto/sku.dto';
import { CreateSkuDto } from './dto/create-sku.dto';
import { UpdateSkuDto } from './dto/update-sku.dto';

@Controller('sku')
export class SkuController {
    constructor(
        private readonly service: SkuService
    ) {}
  
    @Get()
    async get(
        @Body() filterDto: FilterGetSkuDto
    ): Promise<SkuDto[]> {
        const result = await this.service.get(filterDto)
        return Mapper.mapArray(result,SkuDto);
    }

    @Get('/getWithRelations')
    async getWithRelations(
        @Body() filterDto: FilterGetSkuDto
    ): Promise<SkuDto[]> {
        const result = await this.service.getWithRelations(filterDto)
        return Mapper.mapArray(result,SkuDto);
    }
  
    @Post()
    async create(
        @Body() userData: CreateSkuDto
    ): Promise<InsertResult> {

        const id = uuid();
        const data = {id , ...userData};
        return await this.service.store(data) 
    }

    @Put('/:id')
    async update(
        @Param('id') id: string,
        @Body() userData: UpdateSkuDto
    ): Promise<SkuDto> {
        const result = await this.service.update(id, userData)
        return Mapper.map(result,SkuDto);
    }
  
    @Delete('/:id')
    async destroy(
        @Param('id') id: string
    ): Promise<DeleteResultInterface> {
        return this.service.delete(id)
    }
}
