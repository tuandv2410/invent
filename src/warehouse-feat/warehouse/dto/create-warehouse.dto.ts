import { AutoMap } from 'nestjsx-automapper';

export class CreateWarehouseDto{
    @AutoMap()
    location: string;
  
  }
