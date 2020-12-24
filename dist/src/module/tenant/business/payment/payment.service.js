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
exports.PaymentService = void 0;
const common_1 = require("@nestjs/common");
const base_service_1 = require("../../../../base/base.service");
const payment_entity_1 = require("../../../../entities/tenant/business/payment.entity");
const payment_repository_1 = require("./payment.repository");
let PaymentService = class PaymentService extends base_service_1.BaseService {
    constructor(repository, connection) {
        super(repository);
        this.connection = connection;
        this.repository = this.connection.getRepository(payment_entity_1.PaymentEntity);
    }
};
PaymentService = __decorate([
    common_1.Injectable(),
    __param(1, common_1.Inject('CONNECTION')),
    __metadata("design:paramtypes", [payment_repository_1.PaymentRepository, Object])
], PaymentService);
exports.PaymentService = PaymentService;
//# sourceMappingURL=payment.service.js.map