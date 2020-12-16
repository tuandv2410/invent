import { PaymentStatus } from 'src/business/enum/payment-status.enum';
export declare class FilterGetPaymentDto {
    id: string;
    value: number;
    status: PaymentStatus;
    date: string;
    order: string;
}
