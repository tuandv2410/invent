import { IsOptional } from "class-validator";
import { ServiceType } from "src/business/enum/adding-service.enum";

export class UpdateAddingServiceDto {
    @IsOptional()
    price: string;
  
    @IsOptional()
    description: string;

    @IsOptional()
    type: ServiceType
    
}
