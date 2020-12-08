import { AutoMap } from 'nestjsx-automapper';

export class FilterGetProductContractDto {
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