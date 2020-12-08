import { Mapper } from '@nartc/automapper'
import { v4 as uuid } from 'uuid'
import { DeleteResultInterface } from 'src/interfaces/delete-result.interface';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { InsertResult } from 'typeorm';
import { PaymentService } from './payment.service';
import { FilterGetPaymentDto } from './dto/filter-get-payment.dto';
import { PaymentDto } from './dto/payment.dto';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';

@Controller('payment')
export class PaymentController {
    constructor(
        private readonly service: PaymentService
    ) {}
  
    @Get()
    async get(
        @Body() filterDto: FilterGetPaymentDto
    ): Promise<PaymentDto[]> {
        const result = await this.service.get(filterDto)
        return Mapper.mapArray(result,PaymentDto);
    }
  
    @Post()
    async create(
        @Body() userData: CreatePaymentDto
    ): Promise<InsertResult> {

        const id = uuid();
        const data = {id , ...userData};
        return await this.service.store(data) 
    }

    @Put('/:id')
    async update(
        @Param('id') id: string,
        @Body() userData: UpdatePaymentDto
    ): Promise<PaymentDto> {
        const result = await this.service.update(id, userData)
        return Mapper.map(result,PaymentDto);
    }
  
    @Delete('/:id')
    async destroy(
        @Param('id') id: string
    ): Promise<DeleteResultInterface> {
        return this.service.delete(id)
    }
}
