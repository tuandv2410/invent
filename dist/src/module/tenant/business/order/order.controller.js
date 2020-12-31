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
exports.OrderController = void 0;
const common_1 = require("@nestjs/common");
const order_dto_1 = require("./dto/order.dto");
const order_service_1 = require("./order.service");
const create_order_dto_1 = require("./dto/create-order.dto");
const update_order_dto_1 = require("./dto/update-order.dto");
const filter_get_order_dto_1 = require("./dto/filter-get-order.dto");
const automapper_1 = require("@nartc/automapper");
const uuid_1 = require("uuid");
const delete_result_interface_1 = require("../../../../interfaces/delete-result.interface");
const shipment_service_1 = require("../shipment/shipment.service");
const payment_service_1 = require("../payment/payment.service");
const business_contract_service_1 = require("../business-contract/business-contract.service");
const business_partner_service_1 = require("../../inventory/business-partner/business-partner.service");
const adding_service_service_1 = require("../adding-service/adding-service.service");
const order_entity_1 = require("../../../../entities/tenant/business/order.entity");
const payment_status_enum_1 = require("../enum/payment-status.enum");
const sku_service_1 = require("../../inventory/sku/sku.service");
const product_order_entity_1 = require("../../../../entities/tenant/business/product-order.entity");
const product_order_service_1 = require("../product-order/product-order.service");
const shipment_status_enum_1 = require("../enum/shipment-status.enum");
let OrderController = class OrderController {
    constructor(service, shipmentService, paymentService, businessContractService, productOrderService, businessPartnerService, addingServiceService, skuService) {
        this.service = service;
        this.shipmentService = shipmentService;
        this.paymentService = paymentService;
        this.businessContractService = businessContractService;
        this.productOrderService = productOrderService;
        this.businessPartnerService = businessPartnerService;
        this.addingServiceService = addingServiceService;
        this.skuService = skuService;
    }
    async get(filterDto) {
        const result = await this.service.get(filterDto);
        return automapper_1.Mapper.mapArray(result, order_dto_1.OrderDto);
    }
    async getWithRelations(filterDto) {
        const result = await this.service.getWithRelations(filterDto);
        return automapper_1.Mapper.mapArray(result, order_dto_1.OrderDto);
    }
    async create(userData) {
        const id = uuid_1.v4();
        const data = Object.assign({ id }, userData);
        return await this.service.store(data);
    }
    async update(id, userData) {
        const result = await this.service.update(id, userData);
        return automapper_1.Mapper.map(result, order_dto_1.OrderDto);
    }
    async destroy(id) {
        return this.service.delete(id);
    }
    async getByBp(idBp) {
        var result = [];
        const BCS = await this.businessContractService.get({ businessPartner: idBp });
        for (const BC of BCS) {
            const orders = await this.service.get({ businessContract: BC.id });
            result = [...result, ...orders];
        }
        return automapper_1.Mapper.mapArray(result, order_dto_1.OrderDto);
    }
    async getByPaymentStatus(status) {
        let result = [];
        const payments = await this.paymentService.getWithRelations({ status: status });
        for (const payment of payments) {
            result = [...result, payment.order];
        }
        return automapper_1.Mapper.mapArray(result, order_dto_1.OrderDto);
    }
    async getByShipmentStatus(status) {
        let result = [];
        const shipments = await this.shipmentService.getWithRelations({ status: status });
        for (const shipment of shipments) {
            result = [...result, shipment.order];
        }
        return automapper_1.Mapper.mapArray(result, order_dto_1.OrderDto);
    }
    async getByProduct(id) {
        let result = [];
        const skus = await this.skuService.getWithRelations({ productId: id });
        for (const sku of skus) {
            for (const pr of sku.productOrders) {
                const productOrders = await this.productOrderService.getWithRelations({ id: pr.id });
                result = [...result, productOrders[0].order];
            }
        }
        return automapper_1.Mapper.mapArray(result, order_dto_1.OrderDto);
    }
};
__decorate([
    common_1.Get(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [filter_get_order_dto_1.FilterGetOrderDto]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "get", null);
__decorate([
    common_1.Get('/getWithRelations'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [filter_get_order_dto_1.FilterGetOrderDto]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "getWithRelations", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_order_dto_1.CreateOrderDto]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "create", null);
__decorate([
    common_1.Put('/:id'),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_order_dto_1.UpdateOrderDto]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "update", null);
__decorate([
    common_1.Delete('/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "destroy", null);
__decorate([
    common_1.Get('/getByBp'),
    __param(0, common_1.Query('idBp')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "getByBp", null);
__decorate([
    common_1.Get('/getByPaymentStatus'),
    __param(0, common_1.Query('status')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "getByPaymentStatus", null);
__decorate([
    common_1.Get('/getByShipmentStatus'),
    __param(0, common_1.Query('status')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "getByShipmentStatus", null);
__decorate([
    common_1.Get('/getByProduct'),
    __param(0, common_1.Query('idProduct')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "getByProduct", null);
OrderController = __decorate([
    common_1.Controller('order'),
    __metadata("design:paramtypes", [order_service_1.OrderService,
        shipment_service_1.ShipmentService,
        payment_service_1.PaymentService,
        business_contract_service_1.BusinessContractService,
        product_order_service_1.ProductOrderService,
        business_partner_service_1.BusinessPartnerService,
        adding_service_service_1.AddingServiceService,
        sku_service_1.SkuService])
], OrderController);
exports.OrderController = OrderController;
//# sourceMappingURL=order.controller.js.map