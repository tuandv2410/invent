import { AutoMap } from 'nestjsx-automapper';

export class UpdatePackageSpecificationDto {
    @AutoMap()
    name: string;
  
    @AutoMap()
    packingLevel: number;
  
    @AutoMap()
    quantity: number;
}
