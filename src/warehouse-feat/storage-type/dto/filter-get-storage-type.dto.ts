import { AutoMap } from 'nestjsx-automapper';
import { StoType } from 'src/warehouse-feat/enum/sto-type.enum';

export class FilterGetStorageTypeDto{
    @AutoMap()
    id: string;
  
    @AutoMap()
    areaType: StoType;
  
  }
