import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AllExceptionsFilter } from './filter/exceptions.filter';
import { create_schema } from './schema/create_schema';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  // app.useGlobalFilters(new AllExceptionsFilter());
  await create_schema();
  await app.listen(3000);
}
bootstrap();
