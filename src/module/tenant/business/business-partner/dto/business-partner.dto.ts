import { AutoMap } from 'nestjsx-automapper';
import { mapFrom, Mapper } from '@nartc/automapper'
import { BpCategory } from 'src/module/tenant/business/enum/bp-category.enum';
import { BpFunction } from 'src/module/tenant/business/enum/bp-function.enum';
import { BpStatus } from 'src/module/tenant/business/enum/bp-status.enum';
import { BusinessPartnerEntity } from 'src/entities/tenant/business/business-partner.entity';
import { IsNotEmpty, IsOptional } from 'class-validator';

class BusinessContract {
  id: string;

  createDate: string;

  moneyValue: number;
}

export class BusinessPartnerDto {
  @AutoMap()
  @IsNotEmpty()
  id: string;

  @AutoMap()
  @IsOptional()
  fullName: string;

  @AutoMap()
  @IsOptional()
  address: string;

  @AutoMap()
  @IsOptional()
  taxInfo: string;

  @AutoMap()
  @IsOptional()
  phone: string;

  @AutoMap()
  @IsOptional()
  email: string;

  @AutoMap()
  @IsOptional()
  discount: number;

  @AutoMap()
  @IsOptional()
  category: BpCategory;

  @AutoMap()
  @IsOptional()
  function: BpFunction;

  @AutoMap()
  @IsNotEmpty()
  status: BpStatus;

  @AutoMap(()=> BusinessContract)
  @IsOptional()
  businessContracts: BusinessContract[];

}

Mapper.createMap(BusinessPartnerEntity, BusinessPartnerDto)
.forMember(
  d=>d.businessContracts,
  mapFrom(s=>s.businessContracts)
)