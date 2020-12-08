import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Mapper } from '@nartc/automapper'
import { v4 as uuid } from 'uuid'
import { BusinessContractService } from './business-contract.service';
import { FilterGetBusinessContractDto } from './dto/filter-get-business-contract.dto';
import { BusinessContractDto } from './dto/business-contract.dto';
import { CreateBusinessContractDto } from './dto/create-business-contract.dto';
import { InsertResult } from 'typeorm';
import { UpdateBusinessContractDto } from './dto/update-business-contract.dto';
import { DeleteResultInterface } from 'src/interfaces/delete-result.interface';

@Controller('business-contract')
export class BusinessContractController {
    constructor(
        private readonly service: BusinessContractService
    ) {}
  
    @Get()
    async get(
        @Body() filterDto: FilterGetBusinessContractDto
    ): Promise<BusinessContractDto[]> {
        const result = await this.service.get(filterDto)
        return Mapper.mapArray(result,BusinessContractDto);
    }
  
    @Post()
    async create(
        @Body() userData: CreateBusinessContractDto
    ): Promise<InsertResult> {

        const id = uuid();
        const data = {id , ...userData};
        return await this.service.store(data) 
    }

    @Put('/:id')
    async update(
        @Param('id') id: string,
        @Body() userData: UpdateBusinessContractDto
    ): Promise<BusinessContractDto> {
        const result = await this.service.update(id, userData)
        return Mapper.map(result,BusinessContractDto);
    }
  
    @Delete('/:id')
    async destroy(
        @Param('id') id: string
    ): Promise<DeleteResultInterface> {
        return this.service.delete(id)
    }
}
