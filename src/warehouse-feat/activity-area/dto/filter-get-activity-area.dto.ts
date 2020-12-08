import { AutoMap } from 'nestjsx-automapper';
import { ActArea } from 'src/warehouse-feat/enum/activity-area.enum';

export class FilterGetActivityAreaDto {
    @AutoMap()
    id: string;
  
    @AutoMap()
    activity: ActArea;
}
