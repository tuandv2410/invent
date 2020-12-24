import { AutoMap } from "nestjsx-automapper";
import { Mapper } from '@nartc/automapper'
import { ProductEntity } from "src/entities/tenant/inventory/product.entity";

export class ProductSearchBody {
    @AutoMap()
    id: string;
    @AutoMap()
    name: string;
}

Mapper.createMap(ProductEntity, ProductSearchBody)