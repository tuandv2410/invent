"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductSearchService = void 0;
const common_1 = require("@nestjs/common");
const elasticsearch_1 = require("@nestjs/elasticsearch");
const search_base_service_1 = require("../../base/search.base.service");
const search_property_config_1 = require("../../config/search-property.config");
const search_settings_config_1 = require("../../config/search-settings.config");
let ProductSearchService = class ProductSearchService extends search_base_service_1.SearchBaseService {
    constructor(elasticsearch) {
        super(elasticsearch, {
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
            fields: ['id', 'name']
        });
    }
};
ProductSearchService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [elasticsearch_1.ElasticsearchService])
], ProductSearchService);
exports.ProductSearchService = ProductSearchService;
//# sourceMappingURL=product.search.service.js.map