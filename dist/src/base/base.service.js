"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseService = void 0;
class BaseService {
    constructor(repository) {
        this.repository = repository;
    }
    async index() {
        return await this.repository.find();
    }
    async findById(id) {
        return await this.repository.findOne(id);
    }
    async findByIds(ids) {
        return await this.repository.findByIds(ids);
    }
    async store(data) {
        return await this.repository.save(data);
    }
    async update(id, data) {
        await this.repository.update(id, data);
        return await this.findById(id);
    }
    async delete(id) {
        return await this.repository.delete(id);
    }
}
exports.BaseService = BaseService;
//# sourceMappingURL=base.service.js.map