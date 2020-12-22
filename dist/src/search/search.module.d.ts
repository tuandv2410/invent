import { ProductSearchService } from './search-service/product.search.service';
export declare class SearchModule {
    private productSearchService;
    constructor(productSearchService: ProductSearchService);
    onModuleInit(): Promise<void>;
}
