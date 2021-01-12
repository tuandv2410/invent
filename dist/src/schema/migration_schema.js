"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.migration_schema = void 0;
const typeorm_1 = require("typeorm");
const create_schema_1 = require("./create_schema");
async function migration_schema() {
    create_schema_1.create_schema("schema_example");
    const schemaList = await typeorm_1.getManager().query('select schema_name from information_schema.schemata;');
    for (let i = 0; i < schemaList.length; i++) {
        const schemaName = schemaList[i].schema_name;
        if (schemaName.startsWith("Schema")) {
            create_schema_1.create_schema(schemaName);
        }
    }
}
exports.migration_schema = migration_schema;
//# sourceMappingURL=migration_schema.js.map