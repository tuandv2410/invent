import { IsNotEmpty } from 'class-validator';
import { StoType } from 'src/epic/warehouse-feat/enum/sto-type.enum';

export class CreateStorageTypeDto{
  
  @IsNotEmpty()
  areaType: StoType;
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  warehouse: string;

}
