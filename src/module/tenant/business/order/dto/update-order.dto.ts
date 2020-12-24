import { IsOptional } from "class-validator";

export class UpdateOrderDto {

    @IsOptional()
    createDate: string;
}
