import { DeleteResultInterface } from 'src/interfaces/delete-result.interface';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { InsertResult } from 'typeorm';
import { Mapper } from '@nartc/automapper'
import { v4 as uuid } from 'uuid'
import { HandlingUnitService } from './handling-unit.service';
import { FilterGetHandlingUnitDto } from './dto/filter-get-handling-unit.dto';
import { HandlingUnitDto } from './dto/handling-unit.dto';
import { CreateHandlingUnitDto } from './dto/create-handling-unit.dto';
import { UpdateHandlingUnitDto } from './dto/update-handling-unit.dto';

@Controller('handling-unit')
export class HandlingUnitController {
    constructor(
        private readonly service: HandlingUnitService
    ) {}
  
    @Get()
    async get(
        @Body() filterDto: FilterGetHandlingUnitDto
    ): Promise<HandlingUnitDto[]> {
        const result = await this.service.get(filterDto)
        return Mapper.mapArray(result,HandlingUnitDto);
    }
  
    @Post()
    async create(
        @Body() userData: CreateHandlingUnitDto
    ): Promise<InsertResult> {

        const id = uuid();
        const data = {id , ...userData};
        return await this.service.store(data) 
    }

    @Put('/:id')
    async update(
        @Param('id') id: string,
        @Body() userData: UpdateHandlingUnitDto
    ): Promise<HandlingUnitDto> {
        const result = await this.service.update(id, userData)
        return Mapper.map(result,HandlingUnitDto);
    }
  
    @Delete('/:id')
    async destroy(
        @Param('id') id: string
    ): Promise<DeleteResultInterface> {
        return this.service.delete(id)
    }
}
