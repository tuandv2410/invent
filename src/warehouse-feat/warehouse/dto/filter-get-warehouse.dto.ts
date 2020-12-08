import { AutoMap } from 'nestjsx-automapper';

export class FilterGetWarehouseDto{
    @AutoMap()
    id: string;
  
    @AutoMap()
    location: string;
  
  }
