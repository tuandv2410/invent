import { Mapper } from '@nartc/automapper'
import { v4 as uuid } from 'uuid'
import { BusinessPartnerService } from './business-partner.service';
import { FilterGetBusinessPartnerDto } from './dto/filter-get-business-partner.dto';
import { BusinessPartnerDto } from './dto/business-partner.dto';
import { CreateBusinessPartnerDto } from './dto/create-business-partner.dto';
import { UpdateBusinessPartnerDto } from './dto/update-business-partner.dto';
import { DeleteResultInterface } from 'src/interfaces/delete-result.interface';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { InsertResult } from 'typeorm';

@Controller('business-partner')
export class BusinessPartnerController {
    constructor(
        private readonly service: BusinessPartnerService
    ) {}
  
    @Get()
    async get(
        @Body() filterDto: FilterGetBusinessPartnerDto
    ): Promise<BusinessPartnerDto[]> {
        const result = await this.service.get(filterDto)
        return Mapper.mapArray(result,BusinessPartnerDto);
    }
  
    @Post()
    async create(
        @Body() userData: CreateBusinessPartnerDto
    ): Promise<InsertResult> {

        const id = uuid();
        const data = {id , ...userData};
        return await this.service.store(data) 
    }

    @Put('/:id')
    async update(
        @Param('id') id: string,
        @Body() userData: UpdateBusinessPartnerDto
    ): Promise<BusinessPartnerDto> {
        const result = await this.service.update(id, userData)
        return Mapper.map(result,BusinessPartnerDto);
    }
  
    @Delete('/:id')
    async destroy(
        @Param('id') id: string
    ): Promise<DeleteResultInterface> {
        return this.service.delete(id)
    }
}
