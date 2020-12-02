import { OrderDto } from './dto/order.dto';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
export declare class OrderController {
    private readonly orderService;
    constructor(orderService: OrderService);
    index(): Promise<OrderDto[]>;
    show(id: string): Promise<OrderDto>;
    create(userData: CreateOrderDto): Promise<OrderDto>;
}
