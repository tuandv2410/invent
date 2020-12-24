import { IsNotEmpty } from 'class-validator';
import { StoType } from 'src/module/tenant/warehouse-feat/enum/sto-type.enum';

export class CreateStorageTypeDto{
  
  @IsNotEmpty()
  areaType: StoType;
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  warehouse: string;

}
