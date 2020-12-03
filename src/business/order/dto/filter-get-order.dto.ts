import { IsOptional } from 'class-validator';

export class FilterGetOrderDto {
    @IsOptional()
    id: number;

    @IsOptional()
    createDate: string;
}
