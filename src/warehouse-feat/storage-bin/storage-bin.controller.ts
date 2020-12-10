import { DeleteResultInterface } from 'src/interfaces/delete-result.interface';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { InsertResult } from 'typeorm';
import { Mapper } from '@nartc/automapper'
import { v4 as uuid } from 'uuid'
import { StorageBinService } from './storage-bin.service';
import { FilterGetStorageBinDto } from './dto/filter-get-storage-bin.dto';
import { StorageBinDto } from './dto/storage-bin.dto';
import { CreateStorageBinDto } from './dto/create-storage-bin.dto';
import { UpdateStorageBinDto } from './dto/update-storage-bin.dto';

@Controller('storage-bin')
export class StorageBinController {
    constructor(
        private readonly service: StorageBinService
    ) {}
  
    @Get()
    async get(
        @Body() filterDto: FilterGetStorageBinDto
    ): Promise<StorageBinDto[]> {
        const result = await this.service.get(filterDto)
        return Mapper.mapArray(result,StorageBinDto);
    }

    @Get('/getWithRelations')
    async getWithRelations(
        @Body() filterDto: FilterGetStorageBinDto
    ): Promise<StorageBinDto[]> {
        const result = await this.service.getWithRelations(filterDto)
        return Mapper.mapArray(result,StorageBinDto);
    }
  
    @Post()
    async create(
        @Body() userData: CreateStorageBinDto
    ): Promise<InsertResult> {

        const id = uuid();
        const data = {id , ...userData};
        return await this.service.store(data) 
    }

    @Put('/:id')
    async update(
        @Param('id') id: string,
        @Body() userData: UpdateStorageBinDto
    ): Promise<StorageBinDto> {
        const result = await this.service.update(id, userData)
        return Mapper.map(result,StorageBinDto);
    }
  
    @Delete('/:id')
    async destroy(
        @Param('id') id: string
    ): Promise<DeleteResultInterface> {
        return this.service.delete(id)
    }
}
