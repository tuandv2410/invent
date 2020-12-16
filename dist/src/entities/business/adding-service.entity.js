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
exports.AddingServiceEntity = void 0;
const typeorm_1 = require("typeorm");
const nestjsx_automapper_1 = require("nestjsx-automapper");
const order_entity_1 = require("./order.entity");
const adding_service_enum_1 = require("../../business/enum/adding-service.enum");
let AddingServiceEntity = class AddingServiceEntity extends typeorm_1.BaseEntity {
};
__decorate([
    nestjsx_automapper_1.AutoMap(),
    typeorm_1.PrimaryColumn(),
    __metadata("design:type", String)
], AddingServiceEntity.prototype, "id", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    typeorm_1.Column({
        nullable: false,
    }),
    __metadata("design:type", Number)
], AddingServiceEntity.prototype, "price", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    typeorm_1.Column({
        nullable: false,
    }),
    __metadata("design:type", String)
], AddingServiceEntity.prototype, "description", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    typeorm_1.Column({
        nullable: false,
    }),
    __metadata("design:type", String)
], AddingServiceEntity.prototype, "type", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(() => order_entity_1.OrderEntity),
    typeorm_1.OneToMany(type => order_entity_1.OrderEntity, order => order.addingService),
    __metadata("design:type", Array)
], AddingServiceEntity.prototype, "orders", void 0);
AddingServiceEntity = __decorate([
    typeorm_1.Entity('adding-service')
], AddingServiceEntity);
exports.AddingServiceEntity = AddingServiceEntity;
//# sourceMappingURL=adding-service.entity.js.map