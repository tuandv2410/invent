"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rename21610444524124 = void 0;
class rename21610444524124 {
    constructor() {
        this.name = 'rename21610444524124';
    }
    async up(queryRunner) {
        const { schema } = queryRunner.connection.options;
        await queryRunner.query(`ALTER TABLE "${schema}"."selling-shipment" RENAME COLUMN "receivedDate" TO "deliveryDate"`);
    }
    async down(queryRunner) {
        const { schema } = queryRunner.connection.options;
        await queryRunner.query(`ALTER TABLE "${schema}"."selling-shipment" RENAME COLUMN "deliveryDate" TO "receivedDate"`);
    }
}
exports.rename21610444524124 = rename21610444524124;
//# sourceMappingURL=1610444524124-rename2.js.map