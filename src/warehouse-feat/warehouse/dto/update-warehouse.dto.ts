import { AutoMap } from 'nestjsx-automapper';

export class UpdateWarehouseDto{
  
    @AutoMap()
    location: string;

}
