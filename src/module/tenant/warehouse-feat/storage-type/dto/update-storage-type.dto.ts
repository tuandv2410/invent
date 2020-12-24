import { IsOptional } from 'class-validator';
import { StoType } from 'src/module/tenant/warehouse-feat/enum/sto-type.enum';

export class UpdateStorageTypeDto{

  @IsOptional()
  areaType: StoType;
  @IsOptional()
  name : string;
}
