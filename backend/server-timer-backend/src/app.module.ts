import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SocketsGateway } from './sockets/sockets.gateway';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, SocketsGateway],
})
export class AppModule {}
