import { IsNotEmpty, IsIn } from 'class-validator';
import { AutoMap } from 'nestjsx-automapper';
import { Mapper } from '@nartc/automapper'
import { BpCategory } from 'src/business/enum/bp-category.enum';
import { BpFunction } from 'src/business/enum/bp-function.enum';
import { BpStatus } from 'src/business/enum/bp-status.enum';
import { BusinessPartnerEntity } from 'src/entities/business/business-partner.entity';


export class BusinessPartnerDto {
  @AutoMap()
  @IsNotEmpty()
  id: number;

  @AutoMap()
  @IsNotEmpty()
  fullName: string;

  @AutoMap()
  @IsNotEmpty()
  @IsIn([BpCategory.GROUP, BpCategory.ORGANIZATION, BpCategory.PERSON])
  category: BpCategory;

  @AutoMap()
  @IsNotEmpty()
  @IsIn([BpFunction.CUSTOMER, BpFunction.SUPPLIER])
  function: BpFunction;

  @AutoMap()
  @IsNotEmpty()
  @IsIn([BpStatus.ACTIVE, BpStatus.DEACTIVE])
  status: BpStatus;

}

Mapper.createMap(BusinessPartnerEntity, BusinessPartnerDto)