import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AuthenticatedSocketAdapter } from './sockets/authenticated-socket.adapter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useWebSocketAdapter(new AuthenticatedSocketAdapter(app)); // Add our custom socket adapter.
  await app.listen(3000);
}
bootstrap();
