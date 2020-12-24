import { IsOptional } from 'class-validator';
import { BinType } from 'src/module/tenant/warehouse-feat/enum/bin-type.enum';

export class UpdateStorageBinDto {
    @IsOptional()
    maxWeight: number;

    @IsOptional()
    name: string;
  
    @IsOptional()
    totalCapicity: number;
  
    @IsOptional()
    type: BinType;
}
