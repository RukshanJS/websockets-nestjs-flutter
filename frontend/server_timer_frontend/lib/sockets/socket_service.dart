import 'package:socket_io_client/socket_io_client.dart';

import 'socket_events.dart';
import 'stream_socket.dart';

class SocketService {
  static Socket? socket;

  static connectAndListenToSocket(String authToken, String deviceId) {
    socket = io(
        'http://192.168.X.X:3000', // todo-Replace with your network IP
        OptionBuilder()
            .setTransports(['websocket'])
            .setAuth({
              'token': 'Bearer $authToken',
            })
            .setQuery({
              'deviceId': deviceId,
            })
            .disableAutoConnect()
            .build());

    if (!socket!.connected) {
      socket!.connect();
      print('connecting....');
    }

    socket!.onConnect((_) {
      print('connected and listening to socket!.');
    });

    socket!.onDisconnect((_) => print('disconnected from socket!.'));

    socket!.onError((data) => print(data));

    socket!.onConnectError((data) => {print(data)});

    // When the message event 'tick' received from server, that data is added to a stream 'streamSocket'.
    socket!.on(TimerEvents.tick.toString().split('.').last, (data) {
      streamSocket.addResponse(data['timer'].toString());
    });
  }

  static disconnectSocket() async {
    socket!.disconnect();
  }

  static disposeSocket() async {
    socket!.dispose();
  }
}
