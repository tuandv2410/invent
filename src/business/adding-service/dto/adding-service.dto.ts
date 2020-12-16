import { AutoMap } from 'nestjsx-automapper';
import { mapFrom, Mapper } from '@nartc/automapper'
import { IsNotEmpty, IsOptional } from 'class-validator';
import { AddingServiceEntity } from 'src/entities/business/adding-service.entity';
import { ServiceType } from 'src/business/enum/adding-service.enum';
class Order {
  @AutoMap()
  id: string;
  @AutoMap()
  createDate: string;
}
export class AddingServiceDto {
  @AutoMap()
  @IsNotEmpty()
  id: string;

  @AutoMap()
  @IsNotEmpty()
  price: number;

  @AutoMap()
  @IsNotEmpty()
  description: string;
  
  @AutoMap()
  @IsNotEmpty()
  type: ServiceType

  @AutoMap(()=>Order)
  @IsOptional()
  orders: Order[];
}

Mapper.createMap(AddingServiceEntity,AddingServiceDto)
.forMember(
  d=>d.orders,
  mapFrom(s=>s.orders)
)