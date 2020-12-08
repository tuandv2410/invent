import { IsNotEmpty } from 'class-validator';
import { AutoMap } from 'nestjsx-automapper';
import { Mapper } from '@nartc/automapper'
import { BusinessContractEntity } from 'src/entities/business/business-contract.entity';

export class BusinessContractDto {
  @AutoMap()
  @IsNotEmpty()
  id: string;

  @AutoMap()
  @IsNotEmpty()
  createDate: string;

  @AutoMap()
  @IsNotEmpty()
  moneyValue: number;

}

Mapper.createMap(BusinessContractEntity, BusinessContractDto);