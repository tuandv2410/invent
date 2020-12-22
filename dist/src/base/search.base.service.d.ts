import { ElasticsearchService } from "@nestjs/elasticsearch";
import { BulkIndexId } from "./interfaces/bulk-index-id.interface";
import { ElasticsearchIndexConfig } from "./interfaces/elasticsearch-index-config.interface";
export declare class SearchBaseService<F, T> {
    private readonly elasticsearchService;
    private config;
    constructor(elasticsearchService: ElasticsearchService, config: ElasticsearchIndexConfig<T>);
    hasIndex(): Promise<boolean>;
    getIndexStats(): Promise<any>;
    createIndex(): Promise<any>;
    updateIndex(): Promise<any>;
    deleteIndex(): Promise<any>;
    indexDocument(id: string, document: Partial<T>): Promise<any>;
    bulkIndexDocuments(documents: Array<BulkIndexId | Partial<T>>): Promise<any>;
    deleteDocument(id: string): Promise<any>;
    updateDocument(id: string, document: Partial<T>): Promise<any>;
    find(text: string): Promise<any>;
}
