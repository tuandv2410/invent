import { AutoMap } from 'nestjsx-automapper';
import { Mapper } from '@nartc/automapper'
import { PaymentEntity } from 'src/entities/tenant/business/payment.entity';
import { PaymentStatus } from 'src/module/tenant/business/enum/payment-status.enum';
import { IsNotEmpty } from 'class-validator';

export class PaymentDto {
  @AutoMap()
  @IsNotEmpty()
  id: string;

  @AutoMap()
  @IsNotEmpty()
  value: number;

  @AutoMap()
  @IsNotEmpty()
  status: PaymentStatus;

  @AutoMap()
  @IsNotEmpty()
  date: string;
}

Mapper.createMap(PaymentEntity, PaymentDto);