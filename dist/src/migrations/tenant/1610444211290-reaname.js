"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reaname1610444211290 = void 0;
class reaname1610444211290 {
    constructor() {
        this.name = 'reaname1610444211290';
    }
    async up(queryRunner) {
        const { schema } = queryRunner.connection.options;
        await queryRunner.query(`ALTER TABLE "${schema}"."product-selling-contract" RENAME COLUMN "totalPricr" TO "totalPrice"`);
        await queryRunner.query(`ALTER TABLE "${schema}"."product-selling-order" RENAME COLUMN "totalPricr" TO "totalPrice"`);
    }
    async down(queryRunner) {
        const { schema } = queryRunner.connection.options;
        await queryRunner.query(`ALTER TABLE "${schema}"."product-selling-order" RENAME COLUMN "totalPrice" TO "totalPricr"`);
        await queryRunner.query(`ALTER TABLE "${schema}"."product-selling-contract" RENAME COLUMN "totalPrice" TO "totalPricr"`);
    }
}
exports.reaname1610444211290 = reaname1610444211290;
//# sourceMappingURL=1610444211290-reaname.js.map