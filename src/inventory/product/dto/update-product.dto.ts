import { AutoMap } from 'nestjsx-automapper';

export class UpdateProductDto {
    @AutoMap()
    name: string;
  
    @AutoMap()
    weight: number;
  
    @AutoMap()
    volume: number;
  
    @AutoMap()
    category: string;
  
    @AutoMap()
    unitOfMeasurement: string;
  
    @AutoMap()
    color: string;
}
