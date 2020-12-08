import { AutoMap } from 'nestjsx-automapper';
import { PmCategory } from 'src/inventory/enum/pm-category.enum';
import { PmType } from 'src/inventory/enum/pm-type.enum';

export class CreatePackgingMaterialDto{

    @AutoMap()
    type: PmType;
  
    @AutoMap()
    category: PmCategory;
  
    @AutoMap()
    tareWeight: number;
  
    @AutoMap()
    tareVolume: string;
  
    @AutoMap()
    capacities: string;
}
