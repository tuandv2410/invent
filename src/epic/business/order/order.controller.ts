import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { OrderDto } from './dto/order.dto';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto'
import { UpdateOrderDto } from './dto/update-order.dto'
import { FilterGetOrderDto } from './dto/filter-get-order.dto';
import { InsertResult } from 'typeorm';
import { Mapper } from '@nartc/automapper'
import { v4 as uuid } from 'uuid'
import { DeleteResultInterface } from 'src/interfaces/delete-result.interface';
import { ShipmentService } from '../shipment/shipment.service';
import { PaymentService } from '../payment/payment.service';
import { BusinessContractService } from '../business-contract/business-contract.service';
import { BusinessPartnerService } from '../business-partner/business-partner.service';
import { AddingServiceService } from '../adding-service/adding-service.service';
import { OrderEntity } from 'src/entities/business/order.entity';
import { PaymentStatus } from '../enum/payment-status.enum';
import { SkuService } from 'src/epic/inventory/sku/sku.service';
import { ProductOrderEntity } from 'src/entities/business/product-order.entity';
import { ProductOrderService } from '../product-order/product-order.service';
import { ShipmentStatus } from '../enum/shipment-status.enum';

@Controller('order')

export class OrderController {
    constructor(
        private readonly service: OrderService,
        private shipmentService : ShipmentService,
        private paymentService : PaymentService,
        private businessContractService : BusinessContractService,
        private productOrderService: ProductOrderService,
        private businessPartnerService : BusinessPartnerService,
        private addingServiceService : AddingServiceService,
        private skuService : SkuService
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

    @Get('/getByBp')
    async getByBp(
        @Query('idBp') idBp: string
    ): Promise<OrderDto[]> {

        var result: OrderEntity[] = [];
        const BCS = await this.businessContractService.get({businessPartner:idBp})
        
        for(const BC of BCS){
            const orders = await this.service.get({businessContract:BC.id})
            result = [...result,...orders]
        }

        return Mapper.mapArray(result,OrderDto);
    }

    @Get('/getByPaymentStatus')
    async getByPaymentStatus(
        @Query('status') status: PaymentStatus
    ): Promise<OrderDto[]> {

        let result: OrderEntity[] = [];
        const payments = await this.paymentService.getWithRelations({status:status})
        
        for(const payment of payments){
            result = [...result,payment.order]
        }

        return Mapper.mapArray(result,OrderDto);
    }

    @Get('/getByShipmentStatus')
    async getByShipmentStatus(
        @Query('status') status: ShipmentStatus
    ): Promise<OrderDto[]> {

        let result: OrderEntity[] = [];
        const shipments = await this.shipmentService.getWithRelations({status:status})
        
        for(const shipment of shipments){
            result = [...result,shipment.order]
        }

        return Mapper.mapArray(result,OrderDto);
    }

    @Get('/getByProduct')
    async getByProduct(
        @Query('idProduct') id: string
    ): Promise<OrderDto[]> {

        let result: OrderEntity[] = [];
        const skus = await this.skuService.getWithRelations({productId:id})
        
        for(const sku of skus){
            for(const pr of sku.productOrders){
                const productOrders = await this.productOrderService.getWithRelations({id:pr.id})
                result = [...result,productOrders[0].order];
            }
        }

        return Mapper.mapArray(result,OrderDto);
    }


}
