import { DeleteResultInterface } from 'src/interfaces/delete-result.interface';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { InsertResult } from 'typeorm';
import { Mapper } from '@nartc/automapper'
import { v4 as uuid } from 'uuid'
import { PackgingMaterialService } from './packging-material.service';
import { FilterGetPackgingMaterialDto } from './dto/filter-get-packging-material.dto';
import { PackgingMaterialDto } from './dto/packging-material.dto';
import { CreatePackgingMaterialDto } from './dto/create-packging-material.dto';
import { UpdatePackgingMaterialDto } from './dto/update-packging-material.dto';

@Controller('packging-material')
export class PackgingMaterialController {
    constructor(
        private readonly service: PackgingMaterialService
    ) {}
  
    @Get()
    async get(
        @Body() filterDto: FilterGetPackgingMaterialDto
    ): Promise<PackgingMaterialDto[]> {
        const result = await this.service.get(filterDto)
        return Mapper.mapArray(result,PackgingMaterialDto);
    }
  
    @Post()
    async create(
        @Body() userData: CreatePackgingMaterialDto
    ): Promise<InsertResult> {

        const id = uuid();
        const data = {id , ...userData};
        return await this.service.store(data) 
    }

    @Put('/:id')
    async update(
        @Param('id') id: string,
        @Body() userData: UpdatePackgingMaterialDto
    ): Promise<PackgingMaterialDto> {
        const result = await this.service.update(id, userData)
        return Mapper.map(result,PackgingMaterialDto);
    }
  
    @Delete('/:id')
    async destroy(
        @Param('id') id: string
    ): Promise<DeleteResultInterface> {
        return this.service.delete(id)
    }
}
