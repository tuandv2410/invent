import { AutoMap } from 'nestjsx-automapper';
import { Mapper } from '@nartc/automapper'
import { PaymentEntity } from 'src/entities/business/payment.entity';
import { PaymentStatus } from 'src/business/enum/payment-status.enum';

export class PaymentDto {
  @AutoMap()
  id: string;

  @AutoMap()
  value: number;

  @AutoMap()
  status: PaymentStatus;

  @AutoMap()
  date: string;
}

Mapper.createMap(PaymentEntity, PaymentDto);