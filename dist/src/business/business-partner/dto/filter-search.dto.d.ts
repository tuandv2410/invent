import { BpFunction } from 'src/business/enum/bp-function.enum';
import { BpCategory } from 'src/business/enum/bp-category.enum';
export declare class GetBpsFilterDto {
    id: number;
    category: BpCategory;
    function: BpFunction;
}
