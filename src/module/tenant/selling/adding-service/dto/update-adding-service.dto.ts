import { IsOptional } from "class-validator";
import { ServiceType } from "src/module/tenant/business/enum/adding-service.enum";

export class UpdateAddingServiceDto {
    @IsOptional()
    price: number;
  
    @IsOptional()
    description: string;

    @IsOptional()
    type: ServiceType
    
}
