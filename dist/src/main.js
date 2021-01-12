"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const migration_schema_1 = require("./schema/migration_schema");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe());
    migration_schema_1.migration_schema();
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map