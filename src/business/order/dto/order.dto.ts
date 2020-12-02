import { IsNotEmpty, IsIn } from 'class-validator';
import { AutoMap } from 'nestjsx-automapper';
import { Mapper } from '@nartc/automapper'
import { BpCategory } from 'src/business/enum/bp-category.enum';
import { BpFunction } from 'src/business/enum/bp-function.enum';
import { BpStatus } from 'src/business/enum/bp-status.enum';
import { BusinessPartnerEntity } from 'src/entities/business/business-partner.entity';
import { OrderEntity } from 'src/entities/business/order.entity';


export class OrderDto {
  @AutoMap()
  @IsNotEmpty()
  id: string;

  @AutoMap()
  @IsNotEmpty()
  create_date: string;
}

Mapper.createMap(OrderEntity, OrderDto)