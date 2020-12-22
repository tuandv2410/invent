import { PaymentStatus } from 'src/epic/business/enum/payment-status.enum';
export declare class UpdatePaymentDto {
    value: number;
    status: PaymentStatus;
    date: string;
}
