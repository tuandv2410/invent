import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import * as cookieParser from 'cookie-parser';
import * as session from 'express-session';
import { AppModule } from './app.module';
import { AllExceptionsFilter } from './filter/exceptions.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  // app.useGlobalFilters(new AllExceptionsFilter());
  app.use(session({
    secret: 'my-secret',
    resave: false,
    saveUninitialized: false,
  }))

  app.use(cookieParser())
  await app.listen(3000);
}
bootstrap();
