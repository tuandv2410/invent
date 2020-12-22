import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductRepository } from './product.repository';
import { SearchModule } from 'src/search/search.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([ProductRepository]),
    SearchModule
  ],
  providers: [ProductService],
  controllers: [ProductController],
  exports: [ProductService]
})
export class ProductModule {}
