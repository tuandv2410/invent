import { IsNotEmpty } from 'class-validator';
import { ActArea } from 'src/epic/warehouse-feat/enum/activity-area.enum';

export class CreateActivityAreaDto{

    @IsNotEmpty()
    activity: ActArea;

    @IsNotEmpty()
    name:string;

    @IsNotEmpty()
    warehouse: string;
}
