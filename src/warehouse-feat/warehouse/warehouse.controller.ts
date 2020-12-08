import { DeleteResultInterface } from 'src/interfaces/delete-result.interface';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { InsertResult } from 'typeorm';
import { Mapper } from '@nartc/automapper'
import { v4 as uuid } from 'uuid'
import { WarehouseService } from './warehouse.service';
import { FilterGetWarehouseDto } from './dto/filter-get-warehouse.dto';
import { WarehouseDto } from './dto/warehouse.dto';
import { CreateWarehouseDto } from './dto/create-warehouse.dto';
import { UpdateWarehouseDto } from './dto/update-warehouse.dto';

@Controller('warehouse')
export class WarehouseController {
    constructor(
        private readonly service: WarehouseService
    ) {}
  
    @Get()
    async get(
        @Body() filterDto: FilterGetWarehouseDto
    ): Promise<WarehouseDto[]> {
        const result = await this.service.get(filterDto)
        return Mapper.mapArray(result,WarehouseDto);
    }
  
    @Post()
    async create(
        @Body() userData: CreateWarehouseDto
    ): Promise<InsertResult> {

        const id = uuid();
        const data = {id , ...userData};
        return await this.service.store(data) 
    }

    @Put('/:id')
    async update(
        @Param('id') id: string,
        @Body() userData: UpdateWarehouseDto
    ): Promise<WarehouseDto> {
        const result = await this.service.update(id, userData)
        return Mapper.map(result,WarehouseDto);
    }
  
    @Delete('/:id')
    async destroy(
        @Param('id') id: string
    ): Promise<DeleteResultInterface> {
        return this.service.delete(id)
    }
}
