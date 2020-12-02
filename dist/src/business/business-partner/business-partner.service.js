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
exports.BusinessPartnerService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const delete_result_interface_1 = require("../../interfaces/delete-result.interface");
const business_partner_entity_1 = require("../../entities/business/business-partner.entity");
const typeorm_2 = require("typeorm");
const bp_status_enum_1 = require("../enum/bp-status.enum");
let BusinessPartnerService = class BusinessPartnerService {
    constructor(BpRepository) {
        this.BpRepository = BpRepository;
    }
    async getById(id) {
        const found = await this.BpRepository.findOne({ id });
        if (!found) {
            throw new common_1.HttpException(`Business Partner with ID "${id}" not found!`, common_1.HttpStatus.NOT_FOUND);
        }
        return found;
    }
    async getBP(filterDto) {
        const { id, category, functions } = filterDto;
        const query = this.BpRepository.createQueryBuilder('business-partner');
        if (id) {
            query.andWhere('business-partner.id = :id', { id });
        }
        if (category) {
            query.andWhere('business-partner.category = :category', { category });
        }
        if (functions) {
            query.andWhere('business-partner.function = :functions', { functions });
        }
        try {
            const bps = await query.getMany();
            return bps;
        }
        catch (error) {
            throw new common_1.HttpException('Internal server error', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async getAll() {
        try {
            const res = await this.BpRepository
                .createQueryBuilder("business-partner")
                .getMany();
            return res;
        }
        catch (error) {
            throw new common_1.HttpException('Internal server error', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async create(createBPDto) {
        const { fullName, category, functions } = createBPDto;
        const Bp = new business_partner_entity_1.BusinessPartnerEntity();
        Bp.function = functions;
        Bp.category = category;
        Bp.fullName = fullName;
        Bp.status = bp_status_enum_1.BpStatus.ACTIVE;
        try {
            await Bp.save();
        }
        catch (error) {
            if (error.code === '23505') {
                throw new common_1.HttpException("Business Partner's name already exists", common_1.HttpStatus.CONFLICT);
            }
            else {
                throw new common_1.HttpException('Internal server error', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }
        return Bp;
    }
    async update(updateBPDto) {
        const { id, fullName, category, functions, status } = updateBPDto;
        const Bp = await this.getById(id);
        Bp.fullName = fullName;
        Bp.category = category;
        Bp.function = functions;
        Bp.status = status;
        try {
            await Bp.save();
        }
        catch (error) {
            throw new common_1.HttpException('Internal server error', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return Bp;
    }
    async delete(id) {
        const result = await this.BpRepository.delete({ id });
        if (result.affected === 0) {
            throw new common_1.HttpException(`Business Partner with ID "${id}" not found!`, common_1.HttpStatus.NOT_FOUND);
        }
        return {
            succes: true,
            message: "deleted",
        };
    }
};
BusinessPartnerService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(business_partner_entity_1.BusinessPartnerEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], BusinessPartnerService);
exports.BusinessPartnerService = BusinessPartnerService;
//# sourceMappingURL=business-partner.service.js.map