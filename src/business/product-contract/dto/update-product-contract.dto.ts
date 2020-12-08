import { AutoMap } from 'nestjsx-automapper';

export class UpdateProductContractDto {

    @AutoMap()
    quantity: number;
  
    @AutoMap()
    totalPrice: number;
  
    @AutoMap()
    discount: number;
  
    @AutoMap()
    currency: string;
}