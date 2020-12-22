import { ElasticsearchService } from "@nestjs/elasticsearch";
import { SearchBaseService } from "src/base/search.base.service";
import { ProductSearchBody } from "../search-body/product-search-body.interface";
import { ProductSearchResult } from "../search-result/product-search-result";
export declare class ProductSearchService extends SearchBaseService<ProductSearchResult, ProductSearchBody> {
    constructor(elasticsearch: ElasticsearchService);
}
