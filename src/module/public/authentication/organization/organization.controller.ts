import { DeleteResultInterface } from 'src/interfaces/delete-result.interface';
import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { InsertResult } from 'typeorm';
import { v4 as uuid } from 'uuid'
import { OrganizationService } from './organization.service';
import { FilterGetOrganizationDto } from './dto/filter-get-organization.dto';
import { OrganizationDto } from './dto/organization.dto';
import { Mapper } from '@nartc/automapper'
import { CreateOrganizationDto } from './dto/create-organization.dto';
import { UpdateOrganizationDto } from './dto/update-organization.dto';
import { create_schema } from 'src/schema/create_schema';

@Controller('Organization')
export class OrganizationController {
    constructor(
        private readonly service: OrganizationService,
    ) {}
  
    @Get()
    async get(
        @Body() filterDto: FilterGetOrganizationDto
    ): Promise<OrganizationDto[]> {
        const result = await this.service.get(filterDto)
        return Mapper.mapArray(result,OrganizationDto);
    }

    @Get('/getWithRelations')
    async getWithRelations(
        @Body() filterDto: FilterGetOrganizationDto
    ): Promise<OrganizationDto[]> {
        const result = await this.service.getWithRelations(filterDto)
        return Mapper.mapArray(result,OrganizationDto);
    }
  
    @Post()
    async create(
        @Body() userData: CreateOrganizationDto
    ): Promise<InsertResult> {
        const id = uuid();
        const data = {id , ...userData};
        const res =  await this.service.store(data) 
        await create_schema(userData.name)
        return res;
    }

    @Put('/:id')
    async update(
        @Param('id') id: string,
        @Body() userData: UpdateOrganizationDto
    ): Promise<OrganizationDto> {
        const result = await this.service.update(id, userData)
        return Mapper.map(result,OrganizationDto);
    }
  
    @Delete('/:id')
    async destroy(
        @Param('id') id: string
    ): Promise<DeleteResultInterface> {
        return this.service.delete(id)
    }
}
