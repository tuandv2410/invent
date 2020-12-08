import { AutoMap } from 'nestjsx-automapper';
import { BpCategory } from 'src/business/enum/bp-category.enum';
import { BpFunction } from 'src/business/enum/bp-function.enum';
import { BpStatus } from 'src/business/enum/bp-status.enum';

export class UpdateBusinessPartnerDto {

    @AutoMap()
    fullName: string;
  
    @AutoMap()
    address: string;
  
    @AutoMap()
    taxInfo: string;
  
    @AutoMap()
    phone: string;
  
    @AutoMap()
    email: string;
  
    @AutoMap()
    discount: number;
  
    @AutoMap()
    category: BpCategory;
  
    @AutoMap()
    function: BpFunction;
  
    @AutoMap()
    status: BpStatus;
}