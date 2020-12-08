import { AutoMap } from 'nestjsx-automapper';
import { BinType } from 'src/warehouse-feat/enum/bin-type.enum';

export class CreateStorageBinDto{
    @AutoMap()
    maxWeight: number;
  
    @AutoMap()
    totalCapicity: number;
  
    @AutoMap()
    type: BinType;
}
