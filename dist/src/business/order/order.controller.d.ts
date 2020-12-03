import { OrderDto } from './dto/order.dto';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { FilterGetOrderDto } from './dto/filter-get-order.dto';
import { DeleteResult, InsertResult } from 'typeorm';
export declare class OrderController {
    private readonly orderService;
    constructor(orderService: OrderService);
    get(filterDto: FilterGetOrderDto): Promise<OrderDto[]>;
    create(userData: CreateOrderDto): Promise<InsertResult>;
    delete(id: number): Promise<DeleteResult>;
}
