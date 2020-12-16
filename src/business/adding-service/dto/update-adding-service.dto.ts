import { IsOptional } from "class-validator";
import { ServiceType } from "src/business/enum/adding-service.enum";

export class UpdateAddingServiceDto {
    @IsOptional()
    price: number;
  
    @IsOptional()
    description: string;

    @IsOptional()
    type: ServiceType
    
}
