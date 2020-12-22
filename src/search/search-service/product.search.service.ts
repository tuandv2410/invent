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
                settings: {
                    analysis: {
                        filter: {
                            autocomplete_filter: {
                                type: "edge_ngram",
                                min_gram: 1,
                                max_gram: 20
                            }
                        },
                        analyzer: {
                            autocomplete: { 
                                type: "custom",
                                tokenizer: "standard",
                                filter: [
                                    "lowercase",
                                    "autocomplete_filter"
                                ]
                            }
                        }
                    }
                },
                properties: {
                    id: {
                        type: 'text',
                        analyzer: 'autocomplete',
                        search_analyzer: 'standard',
                    },
                    name: {
                        type: 'text',
                        analyzer: 'autocomplete',
                        search_analyzer: 'standard',
                    },
                },
                fields: ['id','name']
            }
        )
    }
}