import { AutoMap } from 'nestjsx-automapper';

export class FilterGetSkuDto {
    @AutoMap()
    id: string;
  
    @AutoMap()
    expireDate: string;
  
    @AutoMap()
    unitPrice: number;
  
    @AutoMap()
    currency: string;
  
    @AutoMap()
    quantity: number;
}
