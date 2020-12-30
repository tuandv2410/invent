import { IsOptional } from 'class-validator';
import { StoType } from 'src/enum/sto-type.enum';

export class UpdateStorageTypeDto{

  @IsOptional()
  areaType: StoType;
  @IsOptional()
  name : string;
}
