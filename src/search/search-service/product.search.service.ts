import { Injectable } from "@nestjs/common";
import { ElasticsearchService } from "@nestjs/elasticsearch";
import { SearchBaseService } from "src/base/search.base.service";
import { searchProperty } from "src/config/search-property.config";
import { searchSettings } from "src/config/search-settings.config";
import { ProductSearchBody } from "../search-body/product-search-body.interface";
import { ProductSearchResult } from "../search-result/product-search-result";

@Injectable()
export class ProductSearchService extends SearchBaseService<ProductSearchResult,ProductSearchBody> {
    constructor(
        elasticsearch: ElasticsearchService
    ){
        super(
            elasticsearch,
            {
                index: "product",
                settings: searchSettings,
                properties: {
                    name: searchProperty
                },
                fields: ['name']
            }
        )
    }
}