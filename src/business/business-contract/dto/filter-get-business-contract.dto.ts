import { IsNotEmpty } from 'class-validator';
import { AutoMap } from 'nestjsx-automapper';

export class FilterGetBusinessContractDto {
    @AutoMap()
    @IsNotEmpty()
    id: string;
  
    @AutoMap()
    @IsNotEmpty()
    createDate: string;
  
    @AutoMap()
    @IsNotEmpty()
    moneyValue: number;
}
