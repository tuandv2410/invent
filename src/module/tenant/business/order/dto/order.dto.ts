import { IsNotEmpty, IsOptional } from 'class-validator';
import { AutoMap } from 'nestjsx-automapper';
import { mapFrom, Mapper } from '@nartc/automapper'
import { OrderEntity } from 'src/entities/tenant/business/order.entity';
import { PaymentStatus } from 'src/module/tenant/business/enum/payment-status.enum';
import { ShipmentStatus } from 'src/module/tenant/business/enum/shipment-status.enum';

class shipment {
  id: string;

  value: number;

  status: ShipmentStatus;

  deliveryDate: string;

}

class payment {
  id: string;

  value: number;

  status: PaymentStatus;

  date: string;
}


class productOrder {
  id: string;

  quantity: number;

  totalPrice: number;

  discount: number;

  currency: string;
}


export class OrderDto {
  @AutoMap()
  @IsNotEmpty()
  id: string;

  @AutoMap()
  @IsNotEmpty()
  createDate: string;

  @AutoMap()
  @IsOptional()
  payments: payment[];

  @AutoMap()
  @IsOptional()
  shipment: shipment;

  @AutoMap()
  @IsOptional()
  productOrders: productOrder[];
}

Mapper.createMap(OrderEntity, OrderDto)
.forMember(
  d=>d.payments,
  mapFrom(s=>s.payments)
).forMember(
  d=>d.shipment,
  mapFrom(s=>s.shipment)
).forMember(
  d=>d.productOrders,
  mapFrom(s=>s.productOrders)
)