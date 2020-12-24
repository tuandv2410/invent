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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const delete_result_interface_1 = require("../../../../interfaces/delete-result.interface");
const common_1 = require("@nestjs/common");
const automapper_1 = require("@nartc/automapper");
const uuid_1 = require("uuid");
const product_service_1 = require("./product.service");
const filter_get_product_dto_1 = require("./dto/filter-get-product.dto");
const product_dto_1 = require("./dto/product.dto");
const create_product_dto_1 = require("./dto/create-product.dto");
const update_product_dto_1 = require("./dto/update-product.dto");
const product_search_service_1 = require("../../../../search/search-service/product.search.service");
const class_transformer_1 = require("class-transformer");
const product_entity_1 = require("../../../../entities/tenant/inventory/product.entity");
const product_search_body_interface_1 = require("../../../../search/search-body/product-search-body.interface");
let ProductController = class ProductController {
    constructor(service, searchService) {
        this.service = service;
        this.searchService = searchService;
    }
    async get(filterDto) {
        const result = await this.service.get(filterDto);
        return automapper_1.Mapper.mapArray(result, product_dto_1.ProductDto);
    }
    async getWithRelations(filterDto) {
        const result = await this.service.getWithRelations(filterDto);
        return automapper_1.Mapper.mapArray(result, product_dto_1.ProductDto);
    }
    async create(userData) {
        const id = uuid_1.v4();
        const data = Object.assign({ id }, userData);
        const storeData = await this.service.store(data);
        const result = class_transformer_1.plainToClass(product_entity_1.ProductEntity, storeData);
        await this.searchService.indexDocument(id, automapper_1.Mapper.map(result, product_search_body_interface_1.ProductSearchBody));
        return automapper_1.Mapper.map(result, product_dto_1.ProductDto);
    }
    async update(id, userData) {
        const result = await this.service.update(id, userData);
        this.searchService.updateDocument(id, automapper_1.Mapper.map(result, product_search_body_interface_1.ProductSearchBody));
        return automapper_1.Mapper.map(result, product_dto_1.ProductDto);
    }
    async destroy(id) {
        this.searchService.deleteDocument(id);
        return this.service.delete(id);
    }
    async searchForProducts(search) {
        const body = await this.searchService.find(search);
        const Products = body.hits.hits;
        return Products.map((item) => item._source);
    }
};
__decorate([
    common_1.Get(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [filter_get_product_dto_1.FilterGetProductDto]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "get", null);
__decorate([
    common_1.Get('/getWithRelations'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [filter_get_product_dto_1.FilterGetProductDto]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getWithRelations", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_product_dto_1.CreateProductDto]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "create", null);
__decorate([
    common_1.Put('/:id'),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_product_dto_1.UpdateProductDto]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "update", null);
__decorate([
    common_1.Delete('/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "destroy", null);
__decorate([
    common_1.Get('/testSearch'),
    __param(0, common_1.Query('search')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "searchForProducts", null);
ProductController = __decorate([
    common_1.Controller('product'),
    __metadata("design:paramtypes", [product_service_1.ProductService,
        product_search_service_1.ProductSearchService])
], ProductController);
exports.ProductController = ProductController;
//# sourceMappingURL=product.controller.js.map