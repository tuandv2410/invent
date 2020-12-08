import { AutoMap } from 'nestjsx-automapper';

export class UpdateSkuDto {
    @AutoMap()
    expireDate: string;
  
    @AutoMap()
    unitPrice: number;
  
    @AutoMap()
    currency: string;
  
    @AutoMap()
    quantity: number;
}
