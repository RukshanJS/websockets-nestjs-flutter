import { INestApplicationContext } from '@nestjs/common';
import { IoAdapter } from '@nestjs/platform-socket.io';
import { Server } from 'socket.io';

export class AuthenticatedSocketAdapter extends IoAdapter {
  // private readonly authService:AuthService;
  constructor(private app: INestApplicationContext) {
    super(app);
    // this.authService = this.app.get(AuthService);
  }

  createIOServer(port: number, options?: any) {
    const server: Server = super.createIOServer(port, options);

    server.use(async (socket: any, next) => {
      const tokenPayload: string = socket.handshake?.auth?.token;

      if (!tokenPayload) {
        return next(new Error('Token not provided'));
      }

      const [method, token] = tokenPayload.split(' ');

      if (method !== 'Bearer') {
        return next(
          new Error('Invalid authentication method. Only Bearer is supported.'),
        );
      }

      try {
        socket.user = {};
        // const user = await this.authService.authenticateToken(token);
        // socket.user = user;
        return next();
      } catch (error: any) {
        return next(new Error('Authentication error'));
      }
    });
    return server;
  }
}
