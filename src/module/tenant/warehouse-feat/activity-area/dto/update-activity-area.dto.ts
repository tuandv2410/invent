import { IsOptional } from 'class-validator';
import { ActArea } from 'src/module/tenant/warehouse-feat/enum/activity-area.enum';

export class UpdateActivityAreaDto {


    @IsOptional()
    name: string;
    @IsOptional()
    activity: ActArea;
}
