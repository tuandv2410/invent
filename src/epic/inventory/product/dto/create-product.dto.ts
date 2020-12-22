import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateProductDto{

    @IsNotEmpty()
    name: string;
  
    @IsOptional()
    weight: number;
  
    @IsOptional()
    volume: number;
  
    @IsOptional()
    category: string;
  
    @IsNotEmpty()
    unitOfMeasurement: string;
  
    @IsOptional()
    color: string;
}
