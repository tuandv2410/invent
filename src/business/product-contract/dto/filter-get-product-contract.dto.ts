import { IsOptional } from 'class-validator';

export class FilterGetProductContractDto {
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
  sku: string;

  @IsOptional()
  contract: string;
}