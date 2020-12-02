import { Body, Controller, Get, NotFoundException, Param, Post } from '@nestjs/common';
import { OrderDto } from './dto/order.dto';
import { OrderService } from './order.service';
import { Mapper } from '@nartc/automapper'
import { CreateOrderDto } from './dto/create-order.dto'

@Controller('order')
export class OrderController {
    constructor(
        private readonly orderService: OrderService
    ) {}
  
    @Get()
    async index(): Promise<OrderDto[]> {
        const result = await this.orderService.index()
        return Mapper.mapArray(result,OrderDto);
    }
  
    @Get('/:id')
    async show(@Param('id') id: string): Promise<OrderDto> {
        const order = await this.orderService.findById(id)
        if (!order) {
            throw new NotFoundException()
        }
    
        return Mapper.map(order,OrderDto)
    }
  
    @Post()
    async create(@Body() userData: CreateOrderDto): Promise<OrderDto> {
        const order = await this.orderService.store(userData)
    
        return Mapper.map(order,OrderDto)
    }

}
