import { IsOptional } from 'class-validator';
import { ActArea } from 'src/epic/warehouse-feat/enum/activity-area.enum';

export class FilterGetActivityAreaDto {
    @IsOptional()
    id: string;
  
    @IsOptional()
    name:string;

    @IsOptional()
    activity: ActArea;

    @IsOptional()
    warehouse: string;
}
