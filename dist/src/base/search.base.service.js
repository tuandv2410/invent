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
exports.SearchBaseService = void 0;
const common_1 = require("@nestjs/common");
const elasticsearch_1 = require("@nestjs/elasticsearch");
let SearchBaseService = class SearchBaseService {
    constructor(elasticsearchService, config) {
        this.elasticsearchService = elasticsearchService;
        this.config = config;
    }
    async hasIndex() {
        try {
            const { statusCode } = await this.elasticsearchService.indices.exists({
                index: this.config.index,
            });
            return statusCode === 200;
        }
        catch (error) {
            common_1.Logger.error(error.message, error.stack);
            return false;
        }
    }
    async getIndexStats() {
        try {
            const { body } = await this.elasticsearchService.indices.stats({
                index: this.config.index,
            });
            return body;
        }
        catch (error) {
            common_1.Logger.error(error.message, error.stack);
            return false;
        }
    }
    async createIndex() {
        try {
            const { body } = await this.elasticsearchService.indices.create({
                index: this.config.index,
                body: {
                    settings: this.config.settings,
                    mappings: {
                        properties: this.config.properties,
                    },
                },
            });
            return body;
        }
        catch (error) {
            common_1.Logger.error(error.message, error.stack);
            return false;
        }
    }
    async updateIndex() {
        try {
            const { body } = await this.elasticsearchService.indices.putMapping({
                index: this.config.index,
                body: {
                    properties: this.config.properties,
                },
            });
            return body;
        }
        catch (error) {
            common_1.Logger.error(error.message, error.stack);
            return false;
        }
    }
    async deleteIndex() {
        try {
            const { body } = await this.elasticsearchService.indices.delete({
                index: this.config.index,
            });
            return body;
        }
        catch (error) {
            common_1.Logger.error(error.message, error.stack);
            return false;
        }
    }
    async indexDocument(id, document) {
        try {
            const { body } = await this.elasticsearchService.index({
                index: this.config.index,
                body: document,
                id: `${id}`,
            });
            return body;
        }
        catch (error) {
            common_1.Logger.error(error.message, error.stack);
            return false;
        }
    }
    async bulkIndexDocuments(documents) {
        try {
            const { body } = await this.elasticsearchService.bulk({
                index: this.config.index,
                body: documents,
            });
            return body;
        }
        catch (error) {
            common_1.Logger.error(error.message, error.stack);
            return false;
        }
    }
    async deleteDocument(id) {
        try {
            const { body } = await this.elasticsearchService.delete({
                index: this.config.index,
                id: `${id}`,
            });
            return body;
        }
        catch (error) {
            common_1.Logger.error(error.message, error.stack);
            return false;
        }
    }
    async updateDocument(id, document) {
        const script = Object.entries(document).reduce((result, [key, value]) => {
            return `${result} ctx._source.${key}='${value}';`;
        }, '');
        try {
            const { body } = await this.elasticsearchService.updateByQuery({
                index: this.config.index,
                body: {
                    query: {
                        match: {
                            id: `${id}`,
                        }
                    },
                    script: {
                        inline: script
                    }
                }
            });
            console.log(body);
        }
        catch (error) {
            common_1.Logger.error(error.message, error.stack);
            return false;
        }
    }
    async find(text) {
        try {
            const { body } = await this.elasticsearchService.search({
                index: this.config.index,
                body: {
                    query: {
                        multi_match: {
                            query: text,
                            fields: this.config.fields,
                        }
                    }
                }
            });
            return body;
        }
        catch (error) {
            common_1.Logger.error(error.message, error.stack);
            return false;
        }
    }
};
SearchBaseService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [elasticsearch_1.ElasticsearchService, Object])
], SearchBaseService);
exports.SearchBaseService = SearchBaseService;
//# sourceMappingURL=search.base.service.js.map