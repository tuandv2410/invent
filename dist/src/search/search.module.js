"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchModule = void 0;
const common_1 = require("@nestjs/common");
const elasticsearch_1 = require("@nestjs/elasticsearch");
const elastic_search_config_1 = require("../config/elastic-search.config");
const product_search_service_1 = require("./search-service/product.search.service");
let SearchModule = class SearchModule {
};
SearchModule = __decorate([
    common_1.Module({
        imports: [
            elasticsearch_1.ElasticsearchModule.registerAsync({
                useFactory: async () => (elastic_search_config_1.elasticSearchConfig)
            }),
        ],
        providers: [
            product_search_service_1.ProductSearchService,
        ],
        exports: [
            product_search_service_1.ProductSearchService
        ]
    })
], SearchModule);
exports.SearchModule = SearchModule;
//# sourceMappingURL=search.module.js.map