import { BaseEntity } from "typeorm";
import { StorageBinEntity } from "../warehouse-feat/storage-bin.entity";
import { HandlingUnitEntity } from "./handling-unit.entity";
import { ProductEntity } from "./product.entity";
import { ProductContractEntity } from "../business/product-contract.entity";
import { ProductOrderEntity } from "../business/product-order.entity";
export declare class SkuEntity extends BaseEntity {
    id: string;
    productName: string;
    expireDate: string;
    unitPrice: number;
    currency: string;
    quantity: number;
    storageBin: StorageBinEntity;
    handlingUnit: HandlingUnitEntity;
    product: ProductEntity;
    productContracts: ProductContractEntity[];
    productOrders: ProductOrderEntity[];
}
