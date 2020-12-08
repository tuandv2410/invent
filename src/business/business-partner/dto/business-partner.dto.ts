import { AutoMap } from 'nestjsx-automapper';
import { Mapper } from '@nartc/automapper'
import { BpCategory } from 'src/business/enum/bp-category.enum';
import { BpFunction } from 'src/business/enum/bp-function.enum';
import { BpStatus } from 'src/business/enum/bp-status.enum';
import { BusinessPartnerEntity } from 'src/entities/business/business-partner.entity';

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
}

Mapper.createMap(BusinessPartnerEntity, BusinessPartnerDto);