import { AutoMap } from 'nestjsx-automapper';

export class CreateSkuDto{
    @AutoMap()
    expireDate: string;
  
    @AutoMap()
    unitPrice: number;
  
    @AutoMap()
    currency: string;
  
    @AutoMap()
    quantity: number;
}
