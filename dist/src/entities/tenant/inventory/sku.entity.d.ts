import { BaseEntity } from "typeorm";
import { StorageBinEntity } from "../warehouse-feat/storage-bin.entity";
import { HandlingUnitEntity } from "./handling-unit.entity";
import { ProductEntity } from "./product.entity";
import { ProductSourcingContractEntity } from "../sourcing/product-sourcing-contract.entity";
import { ProductSourcingOrderEntity } from "../sourcing/product-sourcing-order.entity";
import { ProductSellingOrderEntity } from "../selling/product-selling-order.entity";
import { ProductSellingContractEntity } from "../selling/product-selling-contract.entity";
export declare class SkuEntity extends BaseEntity {
    id: string;
    productName: string;
    productId: string;
    expireDate: string;
    unitPrice: number;
    currency: string;
    quantity: number;
    storageBin: StorageBinEntity;
    handlingUnit: HandlingUnitEntity;
    product: ProductEntity;
    productSourcingContracts: ProductSourcingContractEntity[];
    productSourcingOrders: ProductSourcingOrderEntity[];
    productSellingContracts: ProductSellingContractEntity[];
    productSellingOrders: ProductSellingOrderEntity[];
}
