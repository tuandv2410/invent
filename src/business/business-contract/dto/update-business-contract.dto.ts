import { IsNotEmpty } from 'class-validator';
import { AutoMap } from 'nestjsx-automapper';

export class UpdateBusinessContractDto {

    @AutoMap()
    @IsNotEmpty()
    createDate: string;
  
    @AutoMap()
    @IsNotEmpty()
    moneyValue: number;
}
