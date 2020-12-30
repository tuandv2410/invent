import {MigrationInterface, QueryRunner} from "typeorm";
import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";

export class initDb1609309575122 implements MigrationInterface {
    name = 'initDb1609309575122'

    public async up(queryRunner: QueryRunner): Promise<void> {
        const { schema } = queryRunner.connection.options as PostgresConnectionOptions;
        await queryRunner.query(`CREATE TABLE "${schema}"."business-partner" ("id" character varying NOT NULL, "fullName" character varying NOT NULL, "address" character varying, "taxInfo" character varying, "phone" character varying, "email" character varying, "discount" integer, "category" character varying, "function" character varying, "status" character varying NOT NULL, CONSTRAINT "UQ_02b2b4d5166845df39a8415f0ba" UNIQUE ("fullName"), CONSTRAINT "PK_ee50d95d8972ab3c4a66857bca1" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "${schema}"."activity-area" ("id" character varying NOT NULL, "name" character varying NOT NULL, "activity" character varying NOT NULL, "warehouseId" character varying, CONSTRAINT "PK_02c495451d92f0d88bf6ff404da" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "${schema}"."warehouse" ("id" character varying NOT NULL, "name" character varying NOT NULL, "location" character varying NOT NULL, CONSTRAINT "PK_4d177f2e6bda90342dd7279070e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "${schema}"."storage-section" ("id" character varying NOT NULL, "name" character varying NOT NULL, "storageTypeId" character varying, CONSTRAINT "PK_4e894fe4036e54160d1b6720843" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "${schema}"."storage-type" ("id" character varying NOT NULL, "name" character varying NOT NULL, "areaType" character varying NOT NULL, "warehouseId" character varying, CONSTRAINT "PK_5883aa54609fe754cf1734bcfab" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "${schema}"."storage-bin" ("id" character varying NOT NULL, "name" character varying NOT NULL, "maxWeight" integer NOT NULL, "totalCapicity" integer NOT NULL, "type" character varying NOT NULL, "storageTypeId" character varying, "storageSectionId" character varying, "activityAreaId" character varying, CONSTRAINT "PK_41891687e04f6e51c09624a5fc6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "${schema}"."packging-material" ("id" character varying NOT NULL, "type" character varying NOT NULL, "category" character varying NOT NULL, "tareWeight" integer, "tareVolume" integer, "capacities" integer, CONSTRAINT "PK_3ce744b4f9c56e2b6e0ffa6dab3" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "${schema}"."package-specification" ("id" character varying NOT NULL, "name" character varying NOT NULL, "packingLevel" integer NOT NULL, "quantity" integer NOT NULL, "productId" character varying, "packgingMaterialId" character varying, CONSTRAINT "PK_93e39e5f992d5bf754e4df73360" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "${schema}"."product" ("id" character varying NOT NULL, "name" character varying NOT NULL, "weight" integer, "volume" integer, "category" character varying, "unitOfMeasurement" character varying NOT NULL, "color" character varying, CONSTRAINT "PK_30273c9826ff30ea0872d756194" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "${schema}"."handling-unit" ("id" character varying NOT NULL, "parentId" character varying, "type" character varying NOT NULL, "dimension" integer NOT NULL, "weight" integer NOT NULL, "volume" integer NOT NULL, "totalPrice" integer NOT NULL, "currency" character varying NOT NULL, "quantity" integer NOT NULL, "status" character varying NOT NULL, "productId" character varying, "packageSpecificationId" character varying, "packgingMaterialId" character varying, CONSTRAINT "PK_f111a02c36cfc5a0242c2cb41a3" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "${schema}"."product-order" ("id" character varying NOT NULL, "quantity" integer NOT NULL, "totalPrice" integer NOT NULL, "discount" integer NOT NULL, "currency" character varying NOT NULL, "orderId" character varying, "skuId" character varying, CONSTRAINT "PK_719d154a71ed7104d51903c1c8e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "${schema}"."sku" ("id" character varying NOT NULL, "productName" character varying NOT NULL, "productId" character varying NOT NULL, "expireDate" character varying NOT NULL, "unitPrice" integer NOT NULL, "currency" character varying NOT NULL, "quantity" integer NOT NULL, "storageBinId" character varying, "handlingUnitId" character varying, CONSTRAINT "PK_643c5e9e6e68024c5ffef2f6538" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "${schema}"."product-contract" ("id" character varying NOT NULL, "quantity" integer NOT NULL, "totalPrice" integer NOT NULL, "discount" integer NOT NULL, "currency" character varying NOT NULL, "businessContractId" character varying, "skuId" character varying, CONSTRAINT "PK_6a3a3c0c5d2b8e43ff315b7e32c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "${schema}"."business-contract" ("id" character varying NOT NULL, "createDate" character varying NOT NULL, "moneyValue" integer NOT NULL, "businessPartnerId" character varying, CONSTRAINT "PK_e7fe5f555c638daa2c1a48d26fa" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "${schema}"."payment" ("id" character varying NOT NULL, "value" integer NOT NULL, "status" character varying NOT NULL, "date" character varying NOT NULL, "orderId" character varying, CONSTRAINT "PK_a3998dccc441c882351082f16d3" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "${schema}"."shipment" ("id" character varying NOT NULL, "value" integer NOT NULL, "status" character varying NOT NULL, "deliveryDate" character varying NOT NULL, "orderId" character varying, CONSTRAINT "REL_7efae7a20332f29ec021da37c1" UNIQUE ("orderId"), CONSTRAINT "PK_cf24dc68c1a3fee65d0f7dc4af8" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "${schema}"."order" ("id" character varying NOT NULL, "createDate" character varying NOT NULL, "businessContractId" character varying, "addingServiceId" character varying, CONSTRAINT "PK_5f493ad8fca52b72e2e2e8681d2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "${schema}"."adding-service" ("id" character varying NOT NULL, "price" integer NOT NULL, "description" character varying NOT NULL, "type" character varying NOT NULL, CONSTRAINT "PK_c8f6dc7c8bfaae40b8eb4595661" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "${schema}"."activity-area" ADD CONSTRAINT "FK_d8d7d51e82a7eb6b08f5d110e23" FOREIGN KEY ("warehouseId") REFERENCES "${schema}"."warehouse"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "${schema}"."storage-section" ADD CONSTRAINT "FK_398a26bd1bdcc7b90304232cfac" FOREIGN KEY ("storageTypeId") REFERENCES "${schema}"."storage-type"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "${schema}"."storage-type" ADD CONSTRAINT "FK_ac6032aa0438faf213f0419e029" FOREIGN KEY ("warehouseId") REFERENCES "${schema}"."warehouse"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "${schema}"."storage-bin" ADD CONSTRAINT "FK_bee13faf64529103e19077e6c75" FOREIGN KEY ("storageTypeId") REFERENCES "${schema}"."storage-type"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "${schema}"."storage-bin" ADD CONSTRAINT "FK_37f500c4dd7f369e486852c91c2" FOREIGN KEY ("storageSectionId") REFERENCES "${schema}"."storage-section"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "${schema}"."storage-bin" ADD CONSTRAINT "FK_eb88cffe746762e0b284b8b481e" FOREIGN KEY ("activityAreaId") REFERENCES "${schema}"."activity-area"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "${schema}"."package-specification" ADD CONSTRAINT "FK_cdd031b6530cacbb4b324fc8217" FOREIGN KEY ("productId") REFERENCES "${schema}"."product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "${schema}"."package-specification" ADD CONSTRAINT "FK_9cb9f07effcface9ad147b203a3" FOREIGN KEY ("packgingMaterialId") REFERENCES "${schema}"."packging-material"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "${schema}"."handling-unit" ADD CONSTRAINT "FK_841e9101c45a1c4600cc0d12f59" FOREIGN KEY ("productId") REFERENCES "${schema}"."product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "${schema}"."handling-unit" ADD CONSTRAINT "FK_03caab8a1fbd11970648c95bff5" FOREIGN KEY ("packageSpecificationId") REFERENCES "${schema}"."package-specification"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "${schema}"."handling-unit" ADD CONSTRAINT "FK_cc2488ff29dd1e3bea18d7b80dd" FOREIGN KEY ("packgingMaterialId") REFERENCES "${schema}"."packging-material"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "${schema}"."product-order" ADD CONSTRAINT "FK_1df5e4a173d52f2f52b01db4c04" FOREIGN KEY ("orderId") REFERENCES "${schema}"."order"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "${schema}"."product-order" ADD CONSTRAINT "FK_91f90cccf6865d0b145e6dfd56c" FOREIGN KEY ("skuId") REFERENCES "${schema}"."sku"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "${schema}"."sku" ADD CONSTRAINT "FK_3e26cddeb944a9f397257bc89b5" FOREIGN KEY ("storageBinId") REFERENCES "${schema}"."storage-bin"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "${schema}"."sku" ADD CONSTRAINT "FK_0404dad5535025215ca6dbc024d" FOREIGN KEY ("handlingUnitId") REFERENCES "${schema}"."handling-unit"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "${schema}"."sku" ADD CONSTRAINT "FK_f7c5daa51bd2d6ed2a6fae8d77b" FOREIGN KEY ("productId") REFERENCES "${schema}"."product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "${schema}"."product-contract" ADD CONSTRAINT "FK_b569d8c83c8d254ba47b779d184" FOREIGN KEY ("businessContractId") REFERENCES "${schema}"."business-contract"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "${schema}"."product-contract" ADD CONSTRAINT "FK_96984d9c7b2fb2eb0546851d6ec" FOREIGN KEY ("skuId") REFERENCES "${schema}"."sku"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "${schema}"."business-contract" ADD CONSTRAINT "FK_14764ed31087eca3f31c3c45ca5" FOREIGN KEY ("businessPartnerId") REFERENCES "${schema}"."business-partner"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "${schema}"."payment" ADD CONSTRAINT "FK_2550fdc04c36556396bf9d9a7a2" FOREIGN KEY ("orderId") REFERENCES "${schema}"."order"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "${schema}"."shipment" ADD CONSTRAINT "FK_7efae7a20332f29ec021da37c1c" FOREIGN KEY ("orderId") REFERENCES "${schema}"."order"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "${schema}"."order" ADD CONSTRAINT "FK_d3f5791174d6b55c2a4676ad6a1" FOREIGN KEY ("businessContractId") REFERENCES "${schema}"."business-contract"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "${schema}"."order" ADD CONSTRAINT "FK_6d4ad8d9ba514f80e2eae232fc5" FOREIGN KEY ("addingServiceId") REFERENCES "${schema}"."adding-service"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        const { schema } = queryRunner.connection.options as PostgresConnectionOptions;
        await queryRunner.query(`ALTER TABLE "${schema}"."order" DROP CONSTRAINT "FK_6d4ad8d9ba514f80e2eae232fc5"`);
        await queryRunner.query(`ALTER TABLE "${schema}"."order" DROP CONSTRAINT "FK_d3f5791174d6b55c2a4676ad6a1"`);
        await queryRunner.query(`ALTER TABLE "${schema}"."shipment" DROP CONSTRAINT "FK_7efae7a20332f29ec021da37c1c"`);
        await queryRunner.query(`ALTER TABLE "${schema}"."payment" DROP CONSTRAINT "FK_2550fdc04c36556396bf9d9a7a2"`);
        await queryRunner.query(`ALTER TABLE "${schema}"."business-contract" DROP CONSTRAINT "FK_14764ed31087eca3f31c3c45ca5"`);
        await queryRunner.query(`ALTER TABLE "${schema}"."product-contract" DROP CONSTRAINT "FK_96984d9c7b2fb2eb0546851d6ec"`);
        await queryRunner.query(`ALTER TABLE "${schema}"."product-contract" DROP CONSTRAINT "FK_b569d8c83c8d254ba47b779d184"`);
        await queryRunner.query(`ALTER TABLE "${schema}"."sku" DROP CONSTRAINT "FK_f7c5daa51bd2d6ed2a6fae8d77b"`);
        await queryRunner.query(`ALTER TABLE "${schema}"."sku" DROP CONSTRAINT "FK_0404dad5535025215ca6dbc024d"`);
        await queryRunner.query(`ALTER TABLE "${schema}"."sku" DROP CONSTRAINT "FK_3e26cddeb944a9f397257bc89b5"`);
        await queryRunner.query(`ALTER TABLE "${schema}"."product-order" DROP CONSTRAINT "FK_91f90cccf6865d0b145e6dfd56c"`);
        await queryRunner.query(`ALTER TABLE "${schema}"."product-order" DROP CONSTRAINT "FK_1df5e4a173d52f2f52b01db4c04"`);
        await queryRunner.query(`ALTER TABLE "${schema}"."handling-unit" DROP CONSTRAINT "FK_cc2488ff29dd1e3bea18d7b80dd"`);
        await queryRunner.query(`ALTER TABLE "${schema}"."handling-unit" DROP CONSTRAINT "FK_03caab8a1fbd11970648c95bff5"`);
        await queryRunner.query(`ALTER TABLE "${schema}"."handling-unit" DROP CONSTRAINT "FK_841e9101c45a1c4600cc0d12f59"`);
        await queryRunner.query(`ALTER TABLE "${schema}"."package-specification" DROP CONSTRAINT "FK_9cb9f07effcface9ad147b203a3"`);
        await queryRunner.query(`ALTER TABLE "${schema}"."package-specification" DROP CONSTRAINT "FK_cdd031b6530cacbb4b324fc8217"`);
        await queryRunner.query(`ALTER TABLE "${schema}"."storage-bin" DROP CONSTRAINT "FK_eb88cffe746762e0b284b8b481e"`);
        await queryRunner.query(`ALTER TABLE "${schema}"."storage-bin" DROP CONSTRAINT "FK_37f500c4dd7f369e486852c91c2"`);
        await queryRunner.query(`ALTER TABLE "${schema}"."storage-bin" DROP CONSTRAINT "FK_bee13faf64529103e19077e6c75"`);
        await queryRunner.query(`ALTER TABLE "${schema}"."storage-type" DROP CONSTRAINT "FK_ac6032aa0438faf213f0419e029"`);
        await queryRunner.query(`ALTER TABLE "${schema}"."storage-section" DROP CONSTRAINT "FK_398a26bd1bdcc7b90304232cfac"`);
        await queryRunner.query(`ALTER TABLE "${schema}"."activity-area" DROP CONSTRAINT "FK_d8d7d51e82a7eb6b08f5d110e23"`);
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
