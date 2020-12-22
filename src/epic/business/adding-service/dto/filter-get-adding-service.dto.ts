import { IsOptional } from 'class-validator';
import { ServiceType } from 'src/epic/business/enum/adding-service.enum';

export class FilterGetAddingServiceDto {
  @IsOptional()
  id: string;

  @IsOptional()
  price: number;

  @IsOptional()
  description: string;
  
  @IsOptional()
  type: ServiceType
}