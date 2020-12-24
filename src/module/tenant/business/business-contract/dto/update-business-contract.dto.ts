import { IsOptional } from "class-validator";

export class UpdateBusinessContractDto {
    @IsOptional()
    createDate: string;

    @IsOptional()
    moneyValue: number;
}
