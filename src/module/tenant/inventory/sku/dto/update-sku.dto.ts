import { IsOptional } from 'class-validator';

export class UpdateSkuDto {
    @IsOptional()
    productName: string;

    @IsOptional()
    productId: string;

    @IsOptional()
    expireDate: string;
  
    @IsOptional()
    unitPrice: number;
  
    @IsOptional()
    currency: string;
  
    @IsOptional()
    quantity: number;
}
