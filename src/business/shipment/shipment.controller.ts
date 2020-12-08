import { DeleteResultInterface } from 'src/interfaces/delete-result.interface';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { InsertResult } from 'typeorm';
import { Mapper } from '@nartc/automapper'
import { v4 as uuid } from 'uuid'
import { ShipmentService } from './shipment.service';
import { FilterGetShipmentDto } from './dto/filter-get-shipment.dto';
import { ShipmentDto } from './dto/shipment.dto';
import { CreateShipmentDto } from './dto/create-shipment.dto';
import { UpdateShipmentDto } from './dto/update-shipment.dto';

@Controller('shipment')
export class ShipmentController {
    constructor(
        private readonly service: ShipmentService
    ) {}
  
    @Get()
    async get(
        @Body() filterDto: FilterGetShipmentDto
    ): Promise<ShipmentDto[]> {
        const result = await this.service.get(filterDto)
        return Mapper.mapArray(result,ShipmentDto);
    }
  
    @Post()
    async create(
        @Body() userData: CreateShipmentDto
    ): Promise<InsertResult> {

        const id = uuid();
        const data = {id , ...userData};
        return await this.service.store(data) 
    }

    @Put('/:id')
    async update(
        @Param('id') id: string,
        @Body() userData: UpdateShipmentDto
    ): Promise<ShipmentDto> {
        const result = await this.service.update(id, userData)
        return Mapper.map(result,ShipmentDto);
    }
  
    @Delete('/:id')
    async destroy(
        @Param('id') id: string
    ): Promise<DeleteResultInterface> {
        return this.service.delete(id)
    }
}
