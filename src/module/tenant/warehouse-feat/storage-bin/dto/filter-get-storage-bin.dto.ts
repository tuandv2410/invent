import { IsOptional } from 'class-validator';
import { BinType } from 'src/module/tenant/warehouse-feat/enum/bin-type.enum';

export class FilterGetStorageBinDto {
    @IsOptional()
    id: string;

    @IsOptional()
    name: string;
  
    @IsOptional()
    maxWeight: number;
  
    @IsOptional()
    totalCapicity: number;
  
    @IsOptional()
    type: BinType;

    @IsOptional()
    storageSestion: string;

    @IsOptional()
    storageType: string;

    @IsOptional()
    activityArea: string;
}
