import { DeleteResultInterface } from 'src/interfaces/delete-result.interface';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { InsertResult } from 'typeorm';
import { Mapper } from '@nartc/automapper'
import { v4 as uuid } from 'uuid'
import { PackageSpecificationService } from './package-specification.service';
import { FilterGetPackageSpecificationDto } from './dto/filter-get-package-specification.dto';
import { PackageSpecificationDto } from './dto/package-specification.dto';
import { CreatePackageSpecificationDto } from './dto/create-package-specification.dto';
import { UpdatePackageSpecificationDto } from './dto/update-package-specification.dto';

@Controller('package-specification')
export class PackageSpecificationController {
    constructor(
        private readonly service: PackageSpecificationService
    ) {}
  
    @Get()
    async get(
        @Body() filterDto: FilterGetPackageSpecificationDto
    ): Promise<PackageSpecificationDto[]> {
        const result = await this.service.get(filterDto)
        return Mapper.mapArray(result,PackageSpecificationDto);
    }
  
    @Post()
    async create(
        @Body() userData: CreatePackageSpecificationDto
    ): Promise<InsertResult> {

        const id = uuid();
        const data = {id , ...userData};
        return await this.service.store(data) 
    }

    @Put('/:id')
    async update(
        @Param('id') id: string,
        @Body() userData: UpdatePackageSpecificationDto
    ): Promise<PackageSpecificationDto> {
        const result = await this.service.update(id, userData)
        return Mapper.map(result,PackageSpecificationDto);
    }
  
    @Delete('/:id')
    async destroy(
        @Param('id') id: string
    ): Promise<DeleteResultInterface> {
        return this.service.delete(id)
    }
}
