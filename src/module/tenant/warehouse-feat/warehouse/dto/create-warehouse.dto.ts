import { IsNotEmpty } from 'class-validator';

export class CreateWarehouseDto{
  @IsNotEmpty()
  location: string;
  @IsNotEmpty()
  name: string;
}
