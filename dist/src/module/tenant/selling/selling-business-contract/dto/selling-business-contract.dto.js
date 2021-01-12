"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SellingBusinessContractDto = void 0;
const automapper_1 = require("@nartc/automapper");
const selling_business_contract_entity_1 = require("../../../../../entities/tenant/selling/selling-business-contract.entity");
const product_selling_contract_entity_1 = require("../../../../../entities/tenant/selling/product-selling-contract.entity");
const period_enum_1 = require("../../../../../enum/period.enum");
const commission_entity_1 = require("../../../../../entities/tenant/selling/commission.entity");
const selling_order_entity_1 = require("../../../../../entities/tenant/selling/selling-order.entity");
class ProductSellingContract {
}
automapper_1.Mapper.createMap(product_selling_contract_entity_1.ProductSellingContractEntity, ProductSellingContract);
class Commission {
}
automapper_1.Mapper.createMap(commission_entity_1.CommissionEntity, Commission);
class SellingOrder {
}
automapper_1.Mapper.createMap(selling_order_entity_1.SellingOrderEntity, SellingOrder);
class SellingBusinessContractDto {
}
exports.SellingBusinessContractDto = SellingBusinessContractDto;
automapper_1.Mapper.createMap(selling_business_contract_entity_1.SellingBusinessContractEntity, SellingBusinessContractDto);
//# sourceMappingURL=selling-business-contract.dto.js.map