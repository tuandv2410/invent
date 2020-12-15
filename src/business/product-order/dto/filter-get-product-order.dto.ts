import { IsOptional } from 'class-validator';

export class FilterGetProductOrderDto  {
  @IsOptional()
  id: string;

  @IsOptional()
  quantity: number;

  @IsOptional()
  totalPrice: number;

  @IsOptional()
  discount: number;

  @IsOptional()
  currency: string;

  @IsOptional()
  order: string;

  @IsOptional()
  sku: string;
}