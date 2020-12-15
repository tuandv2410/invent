import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { OrderDto } from './dto/order.dto';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto'
import { UpdateOrderDto } from './dto/update-order.dto'
import { FilterGetOrderDto } from './dto/filter-get-order.dto';
import { InsertResult } from 'typeorm';
import { Mapper } from '@nartc/automapper'
import { v4 as uuid } from 'uuid'
import { DeleteResultInterface } from 'src/interfaces/delete-result.interface';
import { ResultInterface } from 'src/interfaces/result.interface';
import { BusinessPartnerService } from '../business-partner/business-partner.service';
import { AssignOrderToBCDto } from './dto/relations/assign-order-to-bc.dto';
import { BusinessContractService } from '../business-contract/business-contract.service';

@Controller('order')

export class OrderController {
    constructor(
        private readonly service: OrderService,
        private readonly bpService: BusinessPartnerService,
        private readonly bcService: BusinessContractService
    ) {}
  
    @Get()
    async get(
        @Body() filterDto: FilterGetOrderDto
    ): Promise<OrderDto[]> {
        const result = await this.service.get(filterDto)
        return Mapper.mapArray(result,OrderDto);
    }

    @Get('/getWithRelations')
    async getWithRelations(
        @Body() filterDto: FilterGetOrderDto
    ): Promise<OrderDto[]> {
        const result = await this.service.getWithRelations(filterDto)
        return Mapper.mapArray(result,OrderDto);
    }
  
    @Post()
    async create(
        @Body() userData: CreateOrderDto
    ): Promise<InsertResult> {
        const id = uuid();
        const data = {id , ...userData};
        return  await this.service.store(data)
    }

    @Put('/:id')
    async update(
        @Param('id') id: string,
        @Body() userData: UpdateOrderDto
    ): Promise<OrderDto> {
        const result = await this.service.update(id, userData)
        return Mapper.map(result,OrderDto);
    }
  
    @Delete('/:id')
    async destroy(
        @Param('id') id: string
    ): Promise<DeleteResultInterface> {
        return this.service.delete(id)
    }


    @Post('/assignOrderToBC')
    async assignOrderToBC(
        @Body() userData : AssignOrderToBCDto
    ): Promise<ResultInterface> {
        const {idOrder, idBC} = userData
        const order = await this.service.findById(idOrder);
        const bc = await this.bcService.findById(idBC);

        if(order && bc ){
            return this.service.assignOrderToBC(order,bc);
        }else {
            return {
                message: "false",
                succes: false
            }
        }
    }

}
