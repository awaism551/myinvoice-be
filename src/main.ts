import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  var server_port = process.env.PORT || 3000;
  var server_host = '0.0.0.0';
  await app.listen(server_port, server_host);
}
bootstrap();
