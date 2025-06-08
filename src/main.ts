// src/main.ts

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cors from 'cors';
import { ValidationPipe } from '@nestjs/common'; // <-- Import ValidationPipe

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Bật CORS
  app.use(cors({ origin: 'http://localhost:5173' })); 

  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
    transformOptions: {
      enableImplicitConversion: true,
    },
  }));

  // Lắng nghe trên cổng
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();