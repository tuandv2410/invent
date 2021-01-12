import { AutoMap } from 'nestjsx-automapper';
import { mapFrom, Mapper } from '@nartc/automapper'
import { BpCategory } from 'src/enum/bp-category.enum';
import { BpFunction } from 'src/enum/bp-function.enum';
import { BpStatus } from 'src/enum/bp-status.enum';
import { BusinessPartnerEntity } from 'src/entities/tenant/inventory/business-partner.entity';
import { IsNotEmpty, IsOptional } from 'class-validator';
import { SellingBusinessContractEntity } from 'src/entities/tenant/selling/selling-business-contract.entity';
import { SourcingBusinessContractEntity } from 'src/entities/tenant/sourcing/sourcing-business-contract.entity';

class SellingBusinessContract {
  id: string;

  createDate: string;

  moneyValue: number;
}
Mapper.createMap(SellingBusinessContractEntity, SellingBusinessContract)

class SourcingBusinessContract {
  id: string;

  createDate: string;

  moneyValue: number;
}
Mapper.createMap(SourcingBusinessContractEntity, SourcingBusinessContract)

export class BusinessPartnerDto {
  @IsNotEmpty()
  id: string;

  @IsOptional()
  fullName: string;

  @IsOptional()
  address: string;

  @IsOptional()
  taxInfo: string;

  @IsOptional()
  phone: string;

  @IsOptional()
  email: string;

  @IsOptional()
  discount: number;

  @IsOptional()
  category: BpCategory;

  @IsOptional()
  function: BpFunction;

  @IsNotEmpty()
  status: BpStatus;

  @IsOptional()
  sellingBusinessContracts: SellingBusinessContract[];

  @IsOptional()
  sourcingBusinessContracts: SourcingBusinessContract[];

}

Mapper.createMap(BusinessPartnerEntity, BusinessPartnerDto)