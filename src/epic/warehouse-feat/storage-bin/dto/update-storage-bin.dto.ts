import { IsOptional } from 'class-validator';
import { BinType } from 'src/epic/warehouse-feat/enum/bin-type.enum';

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
