import { IsOptional } from 'class-validator';
import { PaymentStatus } from 'src/business/enum/payment-status.enum';

export class UpdatePaymentDto {

    @IsOptional()
    value: number;
  
    @IsOptional()
    status: PaymentStatus;
  
    @IsOptional()
    date: string;
}