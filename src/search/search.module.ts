import { Module } from '@nestjs/common';
import { ElasticsearchModule } from '@nestjs/elasticsearch';
import { elasticSearchConfig } from 'src/config/elastic-search.config';
import { ProductSearchService } from './search-service/product.search.service';

@Module({
    imports: [
        ElasticsearchModule.registerAsync({
            useFactory: async () => (elasticSearchConfig)
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
    // constructor(
    //     private productSearchService: ProductSearchService,
    //   ) {}
    //   async onModuleInit() {
    
    
    //     if(await this.productSearchService.hasIndex() === true){
    //       await this.productSearchService.deleteIndex().then();
    //     }
    //     if(await this.productSearchService.hasIndex() === false){
    //       await this.productSearchService.createIndex().then();
    //     }
    // }
}
