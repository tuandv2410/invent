import { IsNotEmpty } from 'class-validator';
import { StoType } from 'src/enum/sto-type.enum';

export class CreateStorageTypeDto{
  
  @IsNotEmpty()
  areaType: StoType;
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  warehouse: string;

}
