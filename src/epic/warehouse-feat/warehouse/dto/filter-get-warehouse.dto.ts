import { IsOptional } from 'class-validator';

export class FilterGetWarehouseDto{
  @IsOptional()
  id: string;

  @IsOptional()
  name: string;

  @IsOptional()
  location: string;

}
