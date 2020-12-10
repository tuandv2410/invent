import { DeleteResultInterface } from 'src/interfaces/delete-result.interface';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { InsertResult } from 'typeorm';
import { Mapper } from '@nartc/automapper'
import { v4 as uuid } from 'uuid'
import { StorageTypeService } from './storage-type.service';
import { FilterGetStorageTypeDto } from './dto/filter-get-storage-type.dto';
import { StorageTypeDto } from './dto/storage-type.dto';
import { CreateStorageTypeDto } from './dto/create-storage-type.dto';
import { UpdateStorageTypeDto } from './dto/update-storage-type.dto';

@Controller('storage-type')
export class StorageTypeController {
    constructor(
        private readonly service: StorageTypeService
    ) {}
  
    @Get()
    async get(
        @Body() filterDto: FilterGetStorageTypeDto
    ): Promise<StorageTypeDto[]> {
        const result = await this.service.get(filterDto)
        return Mapper.mapArray(result,StorageTypeDto);
    }

    @Get('/getWithRelations')
    async getWithRelations(
        @Body() filterDto: FilterGetStorageTypeDto
    ): Promise<StorageTypeDto[]> {
        const result = await this.service.getWithRelations(filterDto)
        return Mapper.mapArray(result,StorageTypeDto);
    }
  
  
    @Post()
    async create(
        @Body() userData: CreateStorageTypeDto
    ): Promise<InsertResult> {

        const id = uuid();
        const data = {id , ...userData};
        return await this.service.store(data) 
    }

    @Put('/:id')
    async update(
        @Param('id') id: string,
        @Body() userData: UpdateStorageTypeDto
    ): Promise<StorageTypeDto> {
        const result = await this.service.update(id, userData)
        return Mapper.map(result,StorageTypeDto);
    }
  
    @Delete('/:id')
    async destroy(
        @Param('id') id: string
    ): Promise<DeleteResultInterface> {
        return this.service.delete(id)
    }
}
