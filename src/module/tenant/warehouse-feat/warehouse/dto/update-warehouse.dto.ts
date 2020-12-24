import { IsOptional } from 'class-validator';

export class UpdateWarehouseDto{
  
    @IsOptional()
    name: string;
  
    @IsOptional()
    location: string;

}
