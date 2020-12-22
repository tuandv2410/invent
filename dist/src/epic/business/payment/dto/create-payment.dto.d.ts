import { PaymentStatus } from 'src/epic/business/enum/payment-status.enum';
export declare class CreatePaymentDto {
    value: number;
    status: PaymentStatus;
    date: string;
    order: string;
}
