import { PmCategory } from 'src/module/tenant/inventory/enum/pm-category.enum';
import { PmType } from 'src/module/tenant/inventory/enum/pm-type.enum';
export declare class UpdatePackgingMaterialDto {
    type: PmType;
    category: PmCategory;
    tareWeight: number;
    tareVolume: number;
    capacities: number;
}
