import { AutoMap } from 'nestjsx-automapper';
import { PaymentStatus } from 'src/business/enum/payment-status.enum';

export class UpdatePaymentDto {

    @AutoMap()
    value: number;
  
    @AutoMap()
    status: PaymentStatus;
  
    @AutoMap()
    date: string;
}