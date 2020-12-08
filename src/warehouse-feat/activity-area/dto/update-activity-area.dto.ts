import { AutoMap } from 'nestjsx-automapper';
import { ActArea } from 'src/warehouse-feat/enum/activity-area.enum';

export class UpdateActivityAreaDto {

    @AutoMap()
    activity: ActArea;
}
