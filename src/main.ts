import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as process from 'process';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: ['https://digi-quiz.hetrodo.dev', 'http://localhost:8080'],
  });
  await app.listen(parseInt(process.env.PORT || '3000'));
}
bootstrap().then(console.log).catch(console.error);
