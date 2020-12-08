import { AutoMap } from 'nestjsx-automapper';
import { HuStatus } from '../../enum/hu-status.enum';
import { HuType } from '../../enum/hu-type.enum';

export class UpdateHandlingUnitDto {

    @AutoMap()
    type: HuType;
  
    @AutoMap()
    dimension: number;
  
    @AutoMap()
    weight: number;
  
    @AutoMap()
    volume: number;
  
    @AutoMap()
    totalPrice: number;
  
    @AutoMap()
    currency: string;
  
    @AutoMap()
    quantity: number;
  
    @AutoMap()
    status: HuStatus;
}
