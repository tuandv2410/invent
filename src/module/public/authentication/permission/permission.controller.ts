import { DeleteResultInterface } from 'src/interfaces/delete-result.interface';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { InsertResult } from 'typeorm';
import { v4 as uuid } from 'uuid'
import { CreatePermissionDto } from './dto/create-permission.dto';
import { PermissionDto } from './dto/permission.dto';
import { PermissionService } from './permission.service';
import { Mapper } from '@nartc/automapper'
import { FilterGetPermissionDto } from './dto/filter-get-permission.dto';
import { UpdatePermissionDto } from './dto/update-permission.dto';

@Controller('permission')
export class PermissionController {
    constructor(
        private readonly service: PermissionService
    ) {}
  
    @Get()
    async get(
        @Body() filterDto: FilterGetPermissionDto
    ): Promise<PermissionDto[]> {
        const result = await this.service.get(filterDto)
        return Mapper.mapArray(result,PermissionDto);
    }

    @Get('/getWithRelations')
    async getWithRelations(
        @Body() filterDto: FilterGetPermissionDto
    ): Promise<PermissionDto[]> {
        const result = await this.service.getWithRelations(filterDto)
        return Mapper.mapArray(result,PermissionDto);
    }
  
    @Post()
    async create(
        @Body() userData: CreatePermissionDto
    ): Promise<InsertResult> {

        const id = uuid();
        const data = {id , ...userData};
        return await this.service.store(data) 
    }

    @Put('/:id')
    async update(
        @Param('id') id: string,
        @Body() userData: UpdatePermissionDto
    ): Promise<PermissionDto> {
        const result = await this.service.update(id, userData)
        return Mapper.map(result,PermissionDto);
    }
  
    @Delete('/:id')
    async destroy(
        @Param('id') id: string
    ): Promise<DeleteResultInterface> {
        return this.service.delete(id)
    }

}
