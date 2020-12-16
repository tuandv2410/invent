"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseService = void 0;
const common_1 = require("@nestjs/common");
const delete_result_interface_1 = require("../interfaces/delete-result.interface");
class BaseService {
    constructor(repository) {
        this.repository = repository;
    }
    findById(id) {
        try {
            return this.repository.findOne(id);
        }
        catch (error) {
            throw new common_1.HttpException(`${error}`, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    findByIds(ids) {
        try {
            return this.repository.findByIds(ids);
        }
        catch (error) {
            throw new common_1.HttpException(`${error}`, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    get(data) {
        try {
            return this.repository.find({ where: data });
        }
        catch (error) {
            throw new common_1.HttpException(`${error}`, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    getWithRelations(data) {
        try {
            const relations = this.repository.metadata.relations.map(m => m.propertyName);
            return this.repository.find({
                relations,
                where: data
            });
        }
        catch (error) {
            throw new common_1.HttpException(`${error}`, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    store(data) {
        try {
            return this.repository.save(data);
        }
        catch (error) {
            throw new common_1.HttpException(`${error}`, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async update(id, data) {
        try {
            const inDb = await this.repository.findOne(id);
            if (!inDb) {
                throw new common_1.HttpException(`Id ${id} not found!`, common_1.HttpStatus.NOT_FOUND);
            }
            await this.repository.update(id, data);
            return await this.repository.findOne(id);
        }
        catch (error) {
            throw new common_1.HttpException(`${error}`, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async delete(id) {
        let status = {
            succes: true,
            message: 'delete success',
        };
        try {
            const result = await this.repository.delete(id);
            if (result.affected === 0) {
                throw new common_1.HttpException(`ID ${id} not found!`, common_1.HttpStatus.NOT_FOUND);
            }
        }
        catch (error) {
            status = {
                succes: false,
                message: error,
            };
        }
        return status;
    }
}
exports.BaseService = BaseService;
//# sourceMappingURL=base.service.js.map