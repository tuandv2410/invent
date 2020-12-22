import { Module } from '@nestjs/common';
import { ElasticsearchModule } from '@nestjs/elasticsearch';
import { ProductSearchService } from './search-service/product.search.service';

@Module({
    imports: [
        ElasticsearchModule.registerAsync({
            useFactory: async () => ({
                node: 'http://elasticsearch:9200',
                maxRetries: 10,
                pingTimeout: 60000,
                sniffOnStart: true,
                reload_connections: true,
                retry_on_failure: 2,
                request_timeout: 60,
            })
        }),
    ],
    providers: [
        ProductSearchService,
    ],
    exports: [
        ProductSearchService
    ]
})
export class SearchModule {
    constructor(
        private productSearchService: ProductSearchService,
      ) {}
      async onModuleInit() {
    
    
        if(await this.productSearchService.hasIndex() === true){
          await this.productSearchService.deleteIndex().then();
        }
        if(await this.productSearchService.hasIndex() === false){
          await this.productSearchService.createIndex().then();
        }
    }
}
