import { IsNotEmpty } from 'class-validator';

export class CreateProductContractDto {

    @IsNotEmpty()
    quantity: number;
  
    @IsNotEmpty()
    totalPrice: number;
  
    @IsNotEmpty()
    discount: number;
  
    @IsNotEmpty()
    currency: string;

    @IsNotEmpty()
    sku: string;

    @IsNotEmpty()
    businessContract: string;
}
