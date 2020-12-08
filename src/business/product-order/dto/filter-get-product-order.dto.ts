import { AutoMap } from 'nestjsx-automapper';

export class FilterGetProductOrderDto  {
  @AutoMap()
  id: string;

  @AutoMap()
  quantity: number;

  @AutoMap()
  totalPrice: number;

  @AutoMap()
  discount: number;

  @AutoMap()
  currency: string;
}