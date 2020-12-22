import { IsNotEmpty } from 'class-validator';
import { PaymentStatus } from 'src/epic/business/enum/payment-status.enum';

export class CreatePaymentDto {
    @IsNotEmpty()
    value: number;
  
    @IsNotEmpty()
    status: PaymentStatus;
  
    @IsNotEmpty()
    date: string;

    @IsNotEmpty()
    order: string;
}
