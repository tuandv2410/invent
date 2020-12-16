import { DeleteResultInterface } from 'src/interfaces/delete-result.interface';
import { InsertResult } from 'typeorm';
import { PaymentService } from './payment.service';
import { FilterGetPaymentDto } from './dto/filter-get-payment.dto';
import { PaymentDto } from './dto/payment.dto';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';
export declare class PaymentController {
    private readonly service;
    constructor(service: PaymentService);
    get(filterDto: FilterGetPaymentDto): Promise<PaymentDto[]>;
    getWithRelations(filterDto: FilterGetPaymentDto): Promise<PaymentDto[]>;
    create(userData: CreatePaymentDto): Promise<InsertResult>;
    update(id: string, userData: UpdatePaymentDto): Promise<PaymentDto>;
    destroy(id: string): Promise<DeleteResultInterface>;
}
