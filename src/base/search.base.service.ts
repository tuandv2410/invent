import { Injectable, Logger } from "@nestjs/common";
import { ElasticsearchService } from "@nestjs/elasticsearch"
import { BulkIndexId } from "./interfaces/bulk-index-id.interface";
import { ElasticsearchIndexConfig } from "./interfaces/elasticsearch-index-config.interface";

@Injectable()
export class SearchBaseService<F,T> {

    constructor(
        private readonly elasticsearchService: ElasticsearchService,
        private config: ElasticsearchIndexConfig<T>
    ) {}

    async hasIndex(): Promise<boolean> {
        try {
            const { statusCode } = await this.elasticsearchService.indices.exists({
                index: this.config.index,
            });
            return statusCode === 200;
        } catch (error) {
            Logger.error(error.message, error.stack);
            return false;
        }
    }
    
    async getIndexStats(): Promise<any> {
        try {
            const { body } = await this.elasticsearchService.indices.stats({
                index: this.config.index,
            });
            return body;
        } catch (error) {
            Logger.error(error.message, error.stack);
            return false;
        }
    }
      
    async createIndex(): Promise<any> {
        try {
            const { body } = await this.elasticsearchService.indices.create({
                index: this.config.index,
                body: {
                    settings: this.config.settings,
                    mappings: {
                        properties: this.config.properties,
                    },
                },
            });
            return body;
            

        } catch (error) {
            Logger.error(error.message, error.stack);
            return false;
        }
    }

    async updateIndex(): Promise<any> {
        try {
            const { body } = await this.elasticsearchService.indices.putMapping({
                index: this.config.index,
                body: {
                    properties: this.config.properties,
                },
            });
            return body;
        } catch (error) {
            Logger.error(error.message, error.stack);
            return false;
        }
    }
    
    async deleteIndex(): Promise<any> {
        try {
            const { body } = await this.elasticsearchService.indices.delete({
                index: this.config.index,
            });
            return body;
        } catch (error) {
            Logger.error(error.message, error.stack);
            return false;
        }
    }

    async indexDocument(id: number, document: Partial<T>): Promise<any> {
        try {
            const { body } = await this.elasticsearchService.index<F>({
                index: this.config.index,
                body: document,
                id: `${id}`,
            });
                    
            return body;
        } catch (error) {
            Logger.error(error.message, error.stack);
            return false;
        }
    }

    async bulkIndexDocuments(documents: Array<BulkIndexId | Partial<T>>): Promise<any> {
        try {
            const { body } = await this.elasticsearchService.bulk<F>({
                index: this.config.index,
                body: documents,
            });
            return body;
        } catch (error) {
            Logger.error(error.message, error.stack);
            return false;
        }
    }

    async deleteDocument(id: number): Promise<any> {
        try {
            const { body } = await this.elasticsearchService.delete<F>({
                index: this.config.index,
                id: `${id}`,
            });
            return body;
        } catch (error) {
            Logger.error(error.message, error.stack);
            return false;
        }
    }

    async updateDocument(id: number, document: Partial<T>): Promise<any> {
        const script = Object.entries(document).reduce((result, [key, value]) => {
            return `${result} ctx._source.${key}='${value}';`;
        }, '');
     
        try {
            const { body }= await this.elasticsearchService.updateByQuery<F>({
                index: this.config.index,
                body: {
                    query: {
                        match: {
                            id: `${id}`,
                        }
                    },
                    script: {
                        inline: script
                    }
                }
            })
            console.log(body);
            
        } catch (error) {
            Logger.error(error.message, error.stack);
            return false;
        }
        
    }

    async find(text: string): Promise<any> {
        try{
            const { body } = await this.elasticsearchService.search<F>({
                index: this.config.index,
                body: {
                    query: {
                        multi_match: {
                            query: text,
                            fields: this.config.fields,
                        }
                    }
                }
            })  
            return body;
        }catch (error) {
            Logger.error(error.message, error.stack);
            return false;
        }
        
    }
}