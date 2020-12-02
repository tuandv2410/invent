import { BpCategory } from 'src/business/enum/bp-category.enum';
import { BpFunction } from 'src/business/enum/bp-function.enum';
import { BpStatus } from 'src/business/enum/bp-status.enum';
export declare class UpdateBPDto {
    id: number;
    fullName: string;
    category: BpCategory;
    functions: BpFunction;
    status: BpStatus;
}
