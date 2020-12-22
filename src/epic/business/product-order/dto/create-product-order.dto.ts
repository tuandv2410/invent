import { IsNotEmpty } from 'class-validator';

export class CreateProductOrderDto {

    @IsNotEmpty()
    quantity: number;
  
    @IsNotEmpty()
    totalPrice: number;
  
    @IsNotEmpty()
    discount: number;
  
    @IsNotEmpty()
    currency: string;

    @IsNotEmpty()
    order: string;

    @IsNotEmpty()
    sku: string;
}
