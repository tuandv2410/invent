import { IsNotEmpty } from 'class-validator';

export class CreateBusinessContractDto{

    @IsNotEmpty()
    createDate: string;

    @IsNotEmpty()
    moneyValue: number;

    @IsNotEmpty()
    businessPartner: string;
}
