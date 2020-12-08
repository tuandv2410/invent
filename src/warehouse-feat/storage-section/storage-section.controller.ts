import { DeleteResultInterface } from 'src/interfaces/delete-result.interface';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { InsertResult } from 'typeorm';
import { Mapper } from '@nartc/automapper'
import { v4 as uuid } from 'uuid'
import { StorageSectionService } from './storage-section.service';
import { FilterGetStorageSectionDto } from './dto/filter-get-storage-section.dto';
import { StorageSectionDto } from './dto/storage-section.dto';
import { CreateStorageSectionDto } from './dto/create-storage-section.dto';
import { UpdateStorageSectionDto } from './dto/update-storage-section.dto';

@Controller('storage-section')
export class StorageSectionController {
    constructor(
        private readonly service: StorageSectionService
    ) {}
  
    @Get()
    async get(
        @Body() filterDto: FilterGetStorageSectionDto
    ): Promise<StorageSectionDto[]> {
        const result = await this.service.get(filterDto)
        return Mapper.mapArray(result,StorageSectionDto);
    }
  
    @Post()
    async create(
        @Body() userData: CreateStorageSectionDto
    ): Promise<InsertResult> {

        const id = uuid();
        const data = {id , ...userData};
        return await this.service.store(data) 
    }

    @Put('/:id')
    async update(
        @Param('id') id: string,
        @Body() userData: UpdateStorageSectionDto
    ): Promise<StorageSectionDto> {
        const result = await this.service.update(id, userData)
        return Mapper.map(result,StorageSectionDto);
    }
  
    @Delete('/:id')
    async destroy(
        @Param('id') id: string
    ): Promise<DeleteResultInterface> {
        return this.service.delete(id)
    }
}
