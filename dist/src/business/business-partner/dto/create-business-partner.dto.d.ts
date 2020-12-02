import { BpCategory } from 'src/business/enum/bp-category.enum';
import { BpFunction } from 'src/business/enum/bp-function.enum';
export declare class CreateBPDto {
    fullName: string;
    category: BpCategory;
    functions: BpFunction;
}
