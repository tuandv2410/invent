import { IsOptional } from 'class-validator';

export class FilterGetSkuDto {
    @IsOptional()
    id: string;

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

    @IsOptional()
    handlingUnit: string;

    @IsOptional()
    storageBin: string;
}
