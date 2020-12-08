import { AutoMap } from 'nestjsx-automapper';

export class CreatePackageSpecificationDto{
    @AutoMap()
    name: string;
  
    @AutoMap()
    packingLevel: number;
  
    @AutoMap()
    quantity: number;
}
