import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AddingServiceService } from './adding-service.service';
import { AddingServiceDto } from './dto/adding-service.dto';
import { FilterGetAddingServiceDto } from './dto/filter-get-adding-service.dto'
import { Mapper } from '@nartc/automapper'
import { InsertResult } from 'typeorm';
import { CreateAddingServiceDto } from './dto/create-adding-service.dto';
import { UpdateAddingServiceDto } from './dto/update-adding-service.dto';
import { v4 as uuid } from 'uuid'
import { DeleteResultInterface } from 'src/interfaces/delete-result.interface';

@Controller('adding-service')
export class AddingServiceController {
    constructor(
        private readonly service: AddingServiceService,
    ) {}
  
    @Get()
    async get(
        @Body() filterDto: FilterGetAddingServiceDto
    ): Promise<AddingServiceDto[]> {
        const result = await this.service.get(filterDto)
        return Mapper.mapArray(result,AddingServiceDto);
    }

    @Get('/getWithRelations')
    async getWithRelations(
        @Body() filterDto: FilterGetAddingServiceDto
    ): Promise<AddingServiceDto[]> {
        const result = await this.service.getWithRelations(filterDto)
        return Mapper.mapArray(result,AddingServiceDto);
    }
  
    @Post()
    async create(
        @Body() userData: CreateAddingServiceDto
    ): Promise<InsertResult> {

        const id = uuid();
        const data = {id , ...userData};
        return await this.service.store(data) 
    }

    @Put('/:id')
    async update(
        @Param('id') id: string,
        @Body() userData: UpdateAddingServiceDto
    ): Promise<AddingServiceDto> {
        const result = await this.service.update(id, userData)
        return Mapper.map(result,AddingServiceDto);
    }
  
    @Delete('/:id')
    async destroy(
        @Param('id') id: string
    ): Promise<DeleteResultInterface> {
        return this.service.delete(id)
    }
}
