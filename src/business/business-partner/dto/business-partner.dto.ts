import { AutoMap } from 'nestjsx-automapper';
import { mapFrom, Mapper } from '@nartc/automapper'
import { BpCategory } from 'src/business/enum/bp-category.enum';
import { BpFunction } from 'src/business/enum/bp-function.enum';
import { BpStatus } from 'src/business/enum/bp-status.enum';
import { BusinessPartnerEntity } from 'src/entities/business/business-partner.entity';

class BusinessContract {
  @AutoMap()
  id: string;

  @AutoMap()
  createDate: string;

  @AutoMap()
  moneyValue: number;

}

class Order {
  @AutoMap()
  id: string;

  @AutoMap()
  createDate: string;
}

export class BusinessPartnerDto {
  @AutoMap()
  id: string;

  @AutoMap()
  fullName: string;

  @AutoMap()
  address: string;

  @AutoMap()
  taxInfo: string;

  @AutoMap()
  phone: string;

  @AutoMap()
  email: string;

  @AutoMap()
  discount: number;

  @AutoMap()
  category: BpCategory;

  @AutoMap()
  function: BpFunction;

  @AutoMap()
  status: BpStatus;

  @AutoMap(()=> BusinessContract)
  businessContracts: BusinessContract[];

  @AutoMap(()=> Order)
  orders: Order[];


}

Mapper.createMap(BusinessPartnerEntity, BusinessPartnerDto)
.forMember(
  d=>d.businessContracts,
  mapFrom(s=>s.businessContracts)
)
.forMember(
  d=>d.orders,
  mapFrom(s=>s.orders)
);