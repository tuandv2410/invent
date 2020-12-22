import { IsOptional } from 'class-validator';
import { PaymentStatus } from 'src/epic/business/enum/payment-status.enum';

export class UpdatePaymentDto {

    @IsOptional()
    value: number;
  
    @IsOptional()
    status: PaymentStatus;
  
    @IsOptional()
    date: string;
}