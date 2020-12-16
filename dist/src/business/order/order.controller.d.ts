import { OrderDto } from './dto/order.dto';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { FilterGetOrderDto } from './dto/filter-get-order.dto';
import { InsertResult } from 'typeorm';
import { DeleteResultInterface } from 'src/interfaces/delete-result.interface';
import { BusinessPartnerService } from '../business-partner/business-partner.service';
import { BusinessContractService } from '../business-contract/business-contract.service';
export declare class OrderController {
    private readonly service;
    private readonly bpService;
    private readonly bcService;
    constructor(service: OrderService, bpService: BusinessPartnerService, bcService: BusinessContractService);
    get(filterDto: FilterGetOrderDto): Promise<OrderDto[]>;
    getWithRelations(filterDto: FilterGetOrderDto): Promise<OrderDto[]>;
    create(userData: CreateOrderDto): Promise<InsertResult>;
    update(id: string, userData: UpdateOrderDto): Promise<OrderDto>;
    destroy(id: string): Promise<DeleteResultInterface>;
}
