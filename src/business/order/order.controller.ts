import { Body, Controller, Delete, Get, NotFoundException, Param, Patch, Post } from '@nestjs/common';
import { OrderDto } from './dto/order.dto';
import { OrderService } from './order.service';
import { Mapper } from '@nartc/automapper'
import { CreateOrderDto } from './dto/create-order.dto'
import { FilterGetOrderDto } from './dto/filter-get-order.dto';
import { DeleteResult, InsertResult } from 'typeorm';

@Controller('order')
export class OrderController {
    constructor(
        private readonly orderService: OrderService
    ) {}
  
    @Get()
    async get(
        @Body() filterDto: FilterGetOrderDto
    ): Promise<OrderDto[]> {
        const result = await this.orderService.get(filterDto)
        return Mapper.mapArray(result,OrderDto);
    }
  
    @Post()
    async create(
        @Body() userData: CreateOrderDto
    ): Promise<InsertResult> {
        return await this.orderService.store(userData)  
    }

    @Delete()
    async delete(
        @Body() id: number
    ): Promise<DeleteResult> {
        return await this.orderService.delete(id);
    }

}
