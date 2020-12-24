import { IsOptional } from 'class-validator';

export class UpdateProductContractDto {

    @IsOptional()
    quantity: number;
  
    @IsOptional()
    totalPrice: number;
  
    @IsOptional()
    discount: number;
  
    @IsOptional()
    currency: string;
}