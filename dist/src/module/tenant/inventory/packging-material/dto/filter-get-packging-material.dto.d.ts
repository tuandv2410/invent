import { PmCategory } from 'src/enum/pm-category.enum';
import { PmType } from 'src/enum/pm-type.enum';
export declare class FilterGetPackgingMaterialDto {
    id: string;
    type: PmType;
    category: PmCategory;
    tareWeight: number;
    tareVolume: number;
    capacities: number;
}
