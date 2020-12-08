import { AutoMap } from 'nestjsx-automapper';

export class CreateProductOrderDto {

    @AutoMap()
    quantity: number;
  
    @AutoMap()
    totalPrice: number;
  
    @AutoMap()
    discount: number;
  
    @AutoMap()
    currency: string;
}
