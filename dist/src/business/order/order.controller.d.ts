import { OrderDto } from './dto/order.dto';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { FilterGetOrderDto } from './dto/filter-get-order.dto';
import { InsertResult } from 'typeorm';
import { DeleteResultInterface } from 'src/interfaces/delete-result.interface';
import { ShipmentService } from '../shipment/shipment.service';
import { PaymentService } from '../payment/payment.service';
import { BusinessContractService } from '../business-contract/business-contract.service';
import { BusinessPartnerService } from '../business-partner/business-partner.service';
import { AddingServiceService } from '../adding-service/adding-service.service';
import { PaymentStatus } from '../enum/payment-status.enum';
import { SkuService } from 'src/inventory/sku/sku.service';
import { ProductOrderService } from '../product-order/product-order.service';
import { ShipmentStatus } from '../enum/shipment-status.enum';
export declare class OrderController {
    private readonly service;
    private shipmentService;
    private paymentService;
    private businessContractService;
    private productOrderService;
    private businessPartnerService;
    private addingServiceService;
    private skuService;
    constructor(service: OrderService, shipmentService: ShipmentService, paymentService: PaymentService, businessContractService: BusinessContractService, productOrderService: ProductOrderService, businessPartnerService: BusinessPartnerService, addingServiceService: AddingServiceService, skuService: SkuService);
    get(filterDto: FilterGetOrderDto): Promise<OrderDto[]>;
    getWithRelations(filterDto: FilterGetOrderDto): Promise<OrderDto[]>;
    create(userData: CreateOrderDto): Promise<InsertResult>;
    update(id: string, userData: UpdateOrderDto): Promise<OrderDto>;
    destroy(id: string): Promise<DeleteResultInterface>;
    getByBp(idBp: string): Promise<OrderDto[]>;
    getByPaymentStatus(status: PaymentStatus): Promise<OrderDto[]>;
    getByShipmentStatus(status: ShipmentStatus): Promise<OrderDto[]>;
    getByProduct(id: string): Promise<OrderDto[]>;
}
