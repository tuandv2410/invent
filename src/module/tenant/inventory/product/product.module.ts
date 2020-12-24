import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { ProductRepository } from './product.repository';
import { SearchModule } from 'src/search/search.module';

@Module({
  imports: [
    SearchModule
  ],
  providers: [ProductService,ProductRepository],
  controllers: [ProductController],
  exports: [ProductService]
})
export class ProductModule {}
