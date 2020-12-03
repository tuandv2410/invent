import { IsNotEmpty, IsIn } from 'class-validator';
import { AutoMap } from 'nestjsx-automapper';
import { Mapper } from '@nartc/automapper'
import { OrderEntity } from 'src/entities/business/order.entity';

export class OrderDto {
  @AutoMap()
  @IsNotEmpty()
  id: number;

  @AutoMap()
  @IsNotEmpty()
  createDate: string;
}

Mapper.createMap(OrderEntity, OrderDto);