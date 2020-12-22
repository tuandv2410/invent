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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const automapper_1 = require("@nartc/automapper");
const user_service_1 = require("../user/user.service");
const user_dto_1 = require("../user/dto/user.dto");
const result_interface_1 = require("../../../interfaces/result.interface");
let AuthService = class AuthService {
    constructor(userService, jwtService) {
        this.userService = userService;
        this.jwtService = jwtService;
    }
    async login(loginUserDto) {
        const user = await this.userService.login(loginUserDto);
        const token = this._createToken(automapper_1.Mapper.map(user, user_dto_1.UserDto));
        return Object.assign({ username: user.username }, token);
    }
    async changePassword(changePasswordDto) {
        return await this.userService.changePassword(changePasswordDto);
    }
    async validateUser(payload) {
        const { username } = payload;
        const userInDb = await this.userService.get({ username: username });
        if (!userInDb[0]) {
            throw new common_1.HttpException('Invalid token', common_1.HttpStatus.UNAUTHORIZED);
        }
        return automapper_1.Mapper.map(userInDb[0], user_dto_1.UserDto);
    }
    _createToken(userDto) {
        const expiresIn = process.env.EXPIRESIN;
        const username = userDto.username;
        const permissionsDto = userDto.permissions;
        let permissions = [];
        if (permissionsDto) {
            permissionsDto.forEach(permissionDto => {
                permissions = [...permissions, permissionDto.name];
            });
        }
        const payload = { username, permissions };
        const accessToken = this.jwtService.sign(payload);
        return {
            expiresIn,
            accessToken,
        };
    }
};
AuthService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [user_service_1.UserService,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map