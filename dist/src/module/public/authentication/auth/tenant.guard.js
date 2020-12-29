"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TenantGuard = void 0;
const common_1 = require("@nestjs/common");
let TenantGuard = class TenantGuard {
    canActivate(context) {
        const userTenant = context.getArgs()[0].user.organization;
        console.log(context.getArgs()[0].user);
        const tokenTenant = context.getArgs()[0].headers['schema'];
        if (userTenant === tokenTenant)
            return true;
        return false;
    }
};
TenantGuard = __decorate([
    common_1.Injectable()
], TenantGuard);
exports.TenantGuard = TenantGuard;
//# sourceMappingURL=tenant.guard.js.map