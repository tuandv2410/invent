import { PaymentStatus } from 'src/business/enum/payment-status.enum';
export declare class PaymentDto {
    id: string;
    value: number;
    status: PaymentStatus;
    date: string;
}
