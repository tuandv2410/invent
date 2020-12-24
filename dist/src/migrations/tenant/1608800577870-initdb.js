"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initdb1608800577870 = void 0;
class initdb1608800577870 {
    constructor() {
        this.name = 'initdb1608800577870';
    }
    async up(queryRunner) {
        const { schema } = queryRunner.connection.options;
        await queryRunner.query(`CREATE TABLE "${schema}"."business-partner" ("id" character varying NOT NULL, "fullName" character varying NOT NULL, "address" character varying, "taxInfo" character varying, "phone" character varying, "email" character varying, "discount" integer, "category" character varying, "function" character varying, "status" character varying NOT NULL, CONSTRAINT "UQ_54c91faf47498e0d44bfe4fa86d" UNIQUE ("fullName"), CONSTRAINT "PK_26d68f1a52a31859e5067b1e947" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "${schema}"."activity-area" ("id" character varying NOT NULL, "name" character varying NOT NULL, "activity" character varying NOT NULL, "warehouseId" character varying, CONSTRAINT "PK_5e6afb7727d3a8c1e622203fe84" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "${schema}"."warehouse" ("id" character varying NOT NULL, "name" character varying NOT NULL, "location" character varying NOT NULL, CONSTRAINT "PK_3dc799dc3ee5f5b1eae8aeffc04" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "${schema}"."storage-section" ("id" character varying NOT NULL, "name" character varying NOT NULL, "storageTypeId" character varying, CONSTRAINT "PK_c852d141b3cec8a4a0f185318b2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "${schema}"."storage-type" ("id" character varying NOT NULL, "name" character varying NOT NULL, "areaType" character varying NOT NULL, "warehouseId" character varying, CONSTRAINT "PK_ce54dad452ec0e3f4f46533b839" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "${schema}"."storage-bin" ("id" character varying NOT NULL, "name" character varying NOT NULL, "maxWeight" integer NOT NULL, "totalCapicity" integer NOT NULL, "type" character varying NOT NULL, "storageTypeId" character varying, "storageSectionId" character varying, "activityAreaId" character varying, CONSTRAINT "PK_0813fb3806dc87841b70dceb23e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "${schema}"."packging-material" ("id" character varying NOT NULL, "type" character varying NOT NULL, "category" character varying NOT NULL, "tareWeight" integer, "tareVolume" integer, "capacities" integer, CONSTRAINT "PK_7287866168f18633b57ef370e5e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "${schema}"."package-specification" ("id" character varying NOT NULL, "name" character varying NOT NULL, "packingLevel" integer NOT NULL, "quantity" integer NOT NULL, "productId" character varying, "packgingMaterialId" character varying, CONSTRAINT "PK_8ae80ce87ba57a0deeb64765ad1" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "${schema}"."product" ("id" character varying NOT NULL, "name" character varying NOT NULL, "weight" integer, "volume" integer, "category" character varying, "unitOfMeasurement" character varying NOT NULL, "color" character varying, CONSTRAINT "PK_bcee6782c74bdac4294b006ecec" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "${schema}"."handling-unit" ("id" character varying NOT NULL, "parentId" character varying, "type" character varying NOT NULL, "dimension" integer NOT NULL, "weight" integer NOT NULL, "volume" integer NOT NULL, "totalPrice" integer NOT NULL, "currency" character varying NOT NULL, "quantity" integer NOT NULL, "status" character varying NOT NULL, "productId" character varying, "packageSpecificationId" character varying, "packgingMaterialId" character varying, CONSTRAINT "PK_66ea322a37a8a58cdd0f8d12472" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "${schema}"."product-order" ("id" character varying NOT NULL, "quantity" integer NOT NULL, "totalPrice" integer NOT NULL, "discount" integer NOT NULL, "currency" character varying NOT NULL, "orderId" character varying, "skuId" character varying, CONSTRAINT "PK_261ddbed1fb90620f8e1d536108" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "${schema}"."sku" ("id" character varying NOT NULL, "productName" character varying NOT NULL, "productId" character varying NOT NULL, "expireDate" character varying NOT NULL, "unitPrice" integer NOT NULL, "currency" character varying NOT NULL, "quantity" integer NOT NULL, "storageBinId" character varying, "handlingUnitId" character varying, CONSTRAINT "PK_d130fcacc8eb004c04b2fe7a5d6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "${schema}"."product-contract" ("id" character varying NOT NULL, "quantity" integer NOT NULL, "totalPrice" integer NOT NULL, "discount" integer NOT NULL, "currency" character varying NOT NULL, "businessContractId" character varying, "skuId" character varying, CONSTRAINT "PK_7372b51bac0fb5341e326f5de6c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "${schema}"."business-contract" ("id" character varying NOT NULL, "createDate" character varying NOT NULL, "moneyValue" integer NOT NULL, "businessPartnerId" character varying, CONSTRAINT "PK_51d76043bfa022ac198d388332a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "${schema}"."payment" ("id" character varying NOT NULL, "value" integer NOT NULL, "status" character varying NOT NULL, "date" character varying NOT NULL, "orderId" character varying, CONSTRAINT "PK_0e3e8d5227d8020c42c2e999429" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "${schema}"."shipment" ("id" character varying NOT NULL, "value" integer NOT NULL, "status" character varying NOT NULL, "deliveryDate" character varying NOT NULL, "orderId" character varying, CONSTRAINT "REL_05538ea1bd5fc553bc8107518e" UNIQUE ("orderId"), CONSTRAINT "PK_6571ce0e316a72cf9efb8de7569" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "${schema}"."order" ("id" character varying NOT NULL, "createDate" character varying NOT NULL, "businessContractId" character varying, "addingServiceId" character varying, CONSTRAINT "PK_bcabb979d2fa97619bd067a2bdf" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "${schema}"."adding-service" ("id" character varying NOT NULL, "price" integer NOT NULL, "description" character varying NOT NULL, "type" character varying NOT NULL, CONSTRAINT "PK_f02634dc5a75ab05b6553a2f76f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "${schema}"."activity-area" ADD CONSTRAINT "FK_efa8a4635d7dd9d7e0b0d805b00" FOREIGN KEY ("warehouseId") REFERENCES "${schema}"."warehouse"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "${schema}"."storage-section" ADD CONSTRAINT "FK_9b786e8d0ad0fa74cc2165e89ac" FOREIGN KEY ("storageTypeId") REFERENCES "${schema}"."storage-type"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "${schema}"."storage-type" ADD CONSTRAINT "FK_952ab6e68e6233e6a03afd1feae" FOREIGN KEY ("warehouseId") REFERENCES "${schema}"."warehouse"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "${schema}"."storage-bin" ADD CONSTRAINT "FK_3374a4a6f630de2a2bfd6f532a8" FOREIGN KEY ("storageTypeId") REFERENCES "${schema}"."storage-type"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "${schema}"."storage-bin" ADD CONSTRAINT "FK_723b639a16733ac95a4232475b0" FOREIGN KEY ("storageSectionId") REFERENCES "${schema}"."storage-section"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "${schema}"."storage-bin" ADD CONSTRAINT "FK_7939414f41bfb73ccbecf975025" FOREIGN KEY ("activityAreaId") REFERENCES "${schema}"."activity-area"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "${schema}"."package-specification" ADD CONSTRAINT "FK_d0727fa027ad42847dbddf69a62" FOREIGN KEY ("productId") REFERENCES "${schema}"."product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "${schema}"."package-specification" ADD CONSTRAINT "FK_4d6d39166e84379b8ad3018d007" FOREIGN KEY ("packgingMaterialId") REFERENCES "${schema}"."packging-material"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "${schema}"."handling-unit" ADD CONSTRAINT "FK_90242b35e125b9c4efd1a85f54a" FOREIGN KEY ("productId") REFERENCES "${schema}"."product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "${schema}"."handling-unit" ADD CONSTRAINT "FK_80081f77d3b0d179931a9a00198" FOREIGN KEY ("packageSpecificationId") REFERENCES "${schema}"."package-specification"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "${schema}"."handling-unit" ADD CONSTRAINT "FK_4faab9ebdfcd759857da7c7786b" FOREIGN KEY ("packgingMaterialId") REFERENCES "${schema}"."packging-material"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "${schema}"."product-order" ADD CONSTRAINT "FK_62e6d44038a04771caf8282f281" FOREIGN KEY ("orderId") REFERENCES "${schema}"."order"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "${schema}"."product-order" ADD CONSTRAINT "FK_7e395dd727fa1abe72bb9cd0fdd" FOREIGN KEY ("skuId") REFERENCES "${schema}"."sku"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "${schema}"."sku" ADD CONSTRAINT "FK_0902f0154ec18c784944b89a1b9" FOREIGN KEY ("storageBinId") REFERENCES "${schema}"."storage-bin"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "${schema}"."sku" ADD CONSTRAINT "FK_547b5011c4ac591b38d8060fcd0" FOREIGN KEY ("handlingUnitId") REFERENCES "${schema}"."handling-unit"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "${schema}"."sku" ADD CONSTRAINT "FK_aa20fadbde306dbcc3dbe07c1ea" FOREIGN KEY ("productId") REFERENCES "${schema}"."product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "${schema}"."product-contract" ADD CONSTRAINT "FK_4d62a7054cad37bd08eff3a4c1c" FOREIGN KEY ("businessContractId") REFERENCES "${schema}"."business-contract"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "${schema}"."product-contract" ADD CONSTRAINT "FK_c2795bc4afb861f429446710a1f" FOREIGN KEY ("skuId") REFERENCES "${schema}"."sku"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "${schema}"."business-contract" ADD CONSTRAINT "FK_4e507a7c6dc002fd34748a4e6ac" FOREIGN KEY ("businessPartnerId") REFERENCES "${schema}"."business-partner"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "${schema}"."payment" ADD CONSTRAINT "FK_79efd5039eb7ee8e83098bb474d" FOREIGN KEY ("orderId") REFERENCES "${schema}"."order"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "${schema}"."shipment" ADD CONSTRAINT "FK_05538ea1bd5fc553bc8107518eb" FOREIGN KEY ("orderId") REFERENCES "${schema}"."order"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "${schema}"."order" ADD CONSTRAINT "FK_6d248a8a57fa5e7ee9aa1b8cd8a" FOREIGN KEY ("businessContractId") REFERENCES "${schema}"."business-contract"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "${schema}"."order" ADD CONSTRAINT "FK_0ea908e1d4b3a301ca229aebafe" FOREIGN KEY ("addingServiceId") REFERENCES "${schema}"."adding-service"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        const { schema } = queryRunner.connection.options;
        await queryRunner.query(`ALTER TABLE "${schema}"."order" DROP CONSTRAINT "FK_0ea908e1d4b3a301ca229aebafe"`);
        await queryRunner.query(`ALTER TABLE "${schema}"."order" DROP CONSTRAINT "FK_6d248a8a57fa5e7ee9aa1b8cd8a"`);
        await queryRunner.query(`ALTER TABLE "${schema}"."shipment" DROP CONSTRAINT "FK_05538ea1bd5fc553bc8107518eb"`);
        await queryRunner.query(`ALTER TABLE "${schema}"."payment" DROP CONSTRAINT "FK_79efd5039eb7ee8e83098bb474d"`);
        await queryRunner.query(`ALTER TABLE "${schema}"."business-contract" DROP CONSTRAINT "FK_4e507a7c6dc002fd34748a4e6ac"`);
        await queryRunner.query(`ALTER TABLE "${schema}"."product-contract" DROP CONSTRAINT "FK_c2795bc4afb861f429446710a1f"`);
        await queryRunner.query(`ALTER TABLE "${schema}"."product-contract" DROP CONSTRAINT "FK_4d62a7054cad37bd08eff3a4c1c"`);
        await queryRunner.query(`ALTER TABLE "${schema}"."sku" DROP CONSTRAINT "FK_aa20fadbde306dbcc3dbe07c1ea"`);
        await queryRunner.query(`ALTER TABLE "${schema}"."sku" DROP CONSTRAINT "FK_547b5011c4ac591b38d8060fcd0"`);
        await queryRunner.query(`ALTER TABLE "${schema}"."sku" DROP CONSTRAINT "FK_0902f0154ec18c784944b89a1b9"`);
        await queryRunner.query(`ALTER TABLE "${schema}"."product-order" DROP CONSTRAINT "FK_7e395dd727fa1abe72bb9cd0fdd"`);
        await queryRunner.query(`ALTER TABLE "${schema}"."product-order" DROP CONSTRAINT "FK_62e6d44038a04771caf8282f281"`);
        await queryRunner.query(`ALTER TABLE "${schema}"."handling-unit" DROP CONSTRAINT "FK_4faab9ebdfcd759857da7c7786b"`);
        await queryRunner.query(`ALTER TABLE "${schema}"."handling-unit" DROP CONSTRAINT "FK_80081f77d3b0d179931a9a00198"`);
        await queryRunner.query(`ALTER TABLE "${schema}"."handling-unit" DROP CONSTRAINT "FK_90242b35e125b9c4efd1a85f54a"`);
        await queryRunner.query(`ALTER TABLE "${schema}"."package-specification" DROP CONSTRAINT "FK_4d6d39166e84379b8ad3018d007"`);
        await queryRunner.query(`ALTER TABLE "${schema}"."package-specification" DROP CONSTRAINT "FK_d0727fa027ad42847dbddf69a62"`);
        await queryRunner.query(`ALTER TABLE "${schema}"."storage-bin" DROP CONSTRAINT "FK_7939414f41bfb73ccbecf975025"`);
        await queryRunner.query(`ALTER TABLE "${schema}"."storage-bin" DROP CONSTRAINT "FK_723b639a16733ac95a4232475b0"`);
        await queryRunner.query(`ALTER TABLE "${schema}"."storage-bin" DROP CONSTRAINT "FK_3374a4a6f630de2a2bfd6f532a8"`);
        await queryRunner.query(`ALTER TABLE "${schema}"."storage-type" DROP CONSTRAINT "FK_952ab6e68e6233e6a03afd1feae"`);
        await queryRunner.query(`ALTER TABLE "${schema}"."storage-section" DROP CONSTRAINT "FK_9b786e8d0ad0fa74cc2165e89ac"`);
        await queryRunner.query(`ALTER TABLE "${schema}"."activity-area" DROP CONSTRAINT "FK_efa8a4635d7dd9d7e0b0d805b00"`);
        await queryRunner.query(`DROP TABLE "${schema}"."adding-service"`);
        await queryRunner.query(`DROP TABLE "${schema}"."order"`);
        await queryRunner.query(`DROP TABLE "${schema}"."shipment"`);
        await queryRunner.query(`DROP TABLE "${schema}"."payment"`);
        await queryRunner.query(`DROP TABLE "${schema}"."business-contract"`);
        await queryRunner.query(`DROP TABLE "${schema}"."product-contract"`);
        await queryRunner.query(`DROP TABLE "${schema}"."sku"`);
        await queryRunner.query(`DROP TABLE "${schema}"."product-order"`);
        await queryRunner.query(`DROP TABLE "${schema}"."handling-unit"`);
        await queryRunner.query(`DROP TABLE "${schema}"."product"`);
        await queryRunner.query(`DROP TABLE "${schema}"."package-specification"`);
        await queryRunner.query(`DROP TABLE "${schema}"."packging-material"`);
        await queryRunner.query(`DROP TABLE "${schema}"."storage-bin"`);
        await queryRunner.query(`DROP TABLE "${schema}"."storage-type"`);
        await queryRunner.query(`DROP TABLE "${schema}"."storage-section"`);
        await queryRunner.query(`DROP TABLE "${schema}"."warehouse"`);
        await queryRunner.query(`DROP TABLE "${schema}"."activity-area"`);
        await queryRunner.query(`DROP TABLE "${schema}"."business-partner"`);
    }
}
exports.initdb1608800577870 = initdb1608800577870;
//# sourceMappingURL=1608800577870-initdb.js.map