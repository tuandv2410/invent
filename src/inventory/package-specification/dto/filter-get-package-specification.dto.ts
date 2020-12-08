import { AutoMap } from 'nestjsx-automapper';

export class FilterGetPackageSpecificationDto {
    @AutoMap()
    id: string;
  
    @AutoMap()
    name: string;
  
    @AutoMap()
    packingLevel: number;
  
    @AutoMap()
    quantity: number;
}
