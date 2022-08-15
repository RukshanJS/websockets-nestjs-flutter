import {
  ConnectedSocket,
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { TimerEvents } from './events';
import {
  getUserDeviceRoom,
  startTimerForUserDevice,
  stopTimerForUserDevice,
} from './rooms';

@WebSocketGateway()
export class SocketsGateway
  implements OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer()
  public server: Server;

  handleConnection(@ConnectedSocket() client: any) {
    // console.log(
    //   `user ${client.user.id} with socket ${client.id} connected with device ${client.handshake?.query?.deviceId}`,
    // );

    client.join(
      getUserDeviceRoom(
        client.user.id,
        client.handshake.query.deviceId.toString(),
      ),
    );
  }

  handleDisconnect(@ConnectedSocket() client: any) {
    // console.log(
    //   `user ${client.user.id} with socket ${client.id} with device ${client.handshake?.query?.deviceId} DISCONNECTED`,
    // );

    client.leave(
      getUserDeviceRoom(
        client.user.id,
        client.handshake.query.deviceId.toString(),
      ),
    );
  }

  @SubscribeMessage(TimerEvents.timerStart.toString())
  startMyTimer(@ConnectedSocket() client: any, @MessageBody() body: any): void {
    // Stop any existing timer for this user device.
    stopTimerForUserDevice(
      client.user.id,
      client.handshake.query.deviceId.toString(),
    );

    // Start a new timer for this user device.
    startTimerForUserDevice(
      this.server,
      client.user.id,
      client.handshake.query.deviceId.toString(),
      body.dur, // Timer duration
    );
  }

  @SubscribeMessage(TimerEvents.timerStop.toString())
  stopMyTimer(@ConnectedSocket() client: any): void {
    // Stop current timer for this user device.
    stopTimerForUserDevice(
      client.user.id,
      client.handshake.query.deviceId.toString(),
    );
  }
}
