import { PaymentStatus } from 'src/module/tenant/business/enum/payment-status.enum';
export declare class PaymentDto {
    id: string;
    value: number;
    status: PaymentStatus;
    date: string;
}
