import { IsOptional } from 'class-validator';
import { StoType } from 'src/warehouse-feat/enum/sto-type.enum';

export class FilterGetStorageTypeDto{
  @IsOptional()
  id: string;

  @IsOptional()
  areaType: StoType;

  @IsOptional()
  name: string;

  @IsOptional()
  warehouse: string;
  
}
