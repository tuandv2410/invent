import { IsOptional } from 'class-validator';

export class UpdateProductDto {
    @IsOptional()
    name: string;
  
    @IsOptional()
    weight: number;
  
    @IsOptional()
    volume: number;
  
    @IsOptional()
    category: string;
  
    @IsOptional()
    unitOfMeasurement: string;
  
    @IsOptional()
    color: string;
}
