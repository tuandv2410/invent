import { PaymentStatus } from 'src/business/enum/payment-status.enum';
export declare class UpdatePaymentDto {
    value: number;
    status: PaymentStatus;
    date: string;
}