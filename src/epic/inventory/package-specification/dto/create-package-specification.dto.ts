import { IsNotEmpty } from 'class-validator';

export class CreatePackageSpecificationDto{
    @IsNotEmpty()
    name: string;
  
    @IsNotEmpty()
    packingLevel: number;
  
    @IsNotEmpty()
    quantity: number;

    @IsNotEmpty()
    product: string;

    @IsNotEmpty()
    packgingMaterial: string;
}
