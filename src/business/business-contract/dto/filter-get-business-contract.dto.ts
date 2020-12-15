import { IsOptional } from "class-validator";

export class FilterGetBusinessContractDto {

    @IsOptional()
    id: string;
  
    @IsOptional()
    createDate: string;
  
    @IsOptional()
    moneyValue: number;

    @IsOptional()
    businessPartner: string;
}
