import { DeleteResultInterface } from 'src/interfaces/delete-result.interface';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { InsertResult } from 'typeorm';
import { Mapper } from '@nartc/automapper'
import { v4 as uuid } from 'uuid'
import { ActivityAreaService } from './activity-area.service';
import { FilterGetActivityAreaDto } from './dto/filter-get-activity-area.dto';
import { ActivityAreaDto } from './dto/activity-area.dto';
import { CreateActivityAreaDto } from './dto/create-activity-area.dto';
import { UpdateActivityAreaDto } from './dto/update-activity-area.dto';

@Controller('activity-area')
export class ActivityAreaController {
    constructor(
        private readonly service: ActivityAreaService
    ) {}
  
    @Get()
    async get(
        @Body() filterDto: FilterGetActivityAreaDto
    ): Promise<ActivityAreaDto[]> {
        const result = await this.service.get(filterDto)
        return Mapper.mapArray(result,ActivityAreaDto);
    }
  
    @Post()
    async create(
        @Body() userData: CreateActivityAreaDto
    ): Promise<InsertResult> {

        const id = uuid();
        const data = {id , ...userData};
        return await this.service.store(data) 
    }

    @Put('/:id')
    async update(
        @Param('id') id: string,
        @Body() userData: UpdateActivityAreaDto
    ): Promise<ActivityAreaDto> {
        const result = await this.service.update(id, userData)
        return Mapper.map(result,ActivityAreaDto);
    }
  
    @Delete('/:id')
    async destroy(
        @Param('id') id: string
    ): Promise<DeleteResultInterface> {
        return this.service.delete(id)
    }
}
