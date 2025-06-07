import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cors from 'cors'; // <-- Đảm bảo dòng này có

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Bật CORS để cho phép frontend truy cập từ localhost:5173
  app.use(cors({ origin: 'http://localhost:5173' })); 
  await app.listen(process.env.PORT ?? 3000); // Lắng nghe trên cổng 3000 hoặc PORT từ env
}
bootstrap();