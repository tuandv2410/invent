"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrganizationRepository = void 0;
const role_entity_1 = require("../../../../entities/public/authentication/role.entity");
const organization_entity_1 = require("../../../../entities/public/authentication/organization.entity");
const typeorm_1 = require("typeorm");
let OrganizationRepository = class OrganizationRepository extends typeorm_1.Repository {
};
OrganizationRepository = __decorate([
    typeorm_1.EntityRepository(organization_entity_1.OrganizationEntity)
], OrganizationRepository);
exports.OrganizationRepository = OrganizationRepository;
//# sourceMappingURL=organization.repository.js.map