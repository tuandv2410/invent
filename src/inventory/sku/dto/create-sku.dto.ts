import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateSkuDto{
    @IsNotEmpty()
    productName: string;
    @IsNotEmpty()
    expireDate: string;
  
    @IsNotEmpty()
    unitPrice: number;
  
    @IsNotEmpty()
    currency: string;
  
    @IsNotEmpty()
    quantity: number;

    @IsNotEmpty()
    handlingUnit: string;

    @IsOptional()
    storageBin: string;

}
