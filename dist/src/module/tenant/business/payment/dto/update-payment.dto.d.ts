import { PaymentStatus } from 'src/module/tenant/business/enum/payment-status.enum';
export declare class UpdatePaymentDto {
    value: number;
    status: PaymentStatus;
    date: string;
}