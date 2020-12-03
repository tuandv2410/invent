"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseService = void 0;
class BaseService {
    constructor(repository) {
        this.repository = repository;
    }
    findByIds(ids) {
        return this.repository.findByIds(ids);
    }
    get(data) {
        return this.repository.find({ where: data });
    }
    store(data) {
        return this.repository.save(data);
    }
    update(id, data) {
        this.repository.update(id, data);
        return this.repository.findOne(id);
    }
    delete(id) {
        return this.repository.delete(id);
    }
}
exports.BaseService = BaseService;
//# sourceMappingURL=base.service.js.map