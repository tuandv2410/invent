import { IsNotEmpty } from 'class-validator';
import { AutoMap } from 'nestjsx-automapper';
import { ServiceType } from 'src/business/enum/adding-service.enum';

export class CreateAddingServiceDto {
    @IsNotEmpty()
    price: number;
  
    @IsNotEmpty()
    description: string;

    @IsNotEmpty()
    type: ServiceType
}
