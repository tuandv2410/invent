import { IsNotEmpty, IsOptional } from 'class-validator';
import { BinType } from 'src/module/tenant/warehouse-feat/enum/bin-type.enum';

export class CreateStorageBinDto{
    @IsNotEmpty()
    maxWeight: number;

    @IsNotEmpty()
    name: string;
  
    @IsNotEmpty()
    totalCapicity: number;
  
    @IsNotEmpty()
    type: BinType;

    @IsOptional()
    storageSestion: string;

    @IsOptional()
    storageType: string;

    @IsOptional()
    activityArea: string;

}
