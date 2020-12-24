import { IsOptional } from 'class-validator';

export class FilterGetProductDto {
    @IsOptional()
    id: string;
  
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
