import { IsOptional } from 'class-validator';
import { ActArea } from 'src/warehouse-feat/enum/activity-area.enum';

export class UpdateActivityAreaDto {


    @IsOptional()
    name: string;
    @IsOptional()
    activity: ActArea;
}
