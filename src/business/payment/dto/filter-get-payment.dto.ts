import { IsOptional } from 'class-validator';
import { PaymentStatus } from 'src/business/enum/payment-status.enum';

export class FilterGetPaymentDto {
  @IsOptional()
  id: string;

  @IsOptional()
  value: number;

  @IsOptional()
  status: PaymentStatus;

  @IsOptional()
  date: string;

  @IsOptional()
  order: string;
}