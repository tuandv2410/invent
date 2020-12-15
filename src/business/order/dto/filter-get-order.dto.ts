import { IsOptional } from 'class-validator';

export class FilterGetOrderDto {
    @IsOptional()
    id: string;

    @IsOptional()
    createDate: string;

    @IsOptional()
    businessContract: string;

    @IsOptional()
    addingService: string;
}
