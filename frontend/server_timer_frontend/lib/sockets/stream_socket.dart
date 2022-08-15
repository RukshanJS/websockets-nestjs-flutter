import 'dart:async';

class StreamSocket {
  final StreamController _socketResponse = StreamController<String>.broadcast();
  Function(String) get addResponse => _socketResponse.sink.add;
  Stream<String> get getResponse => _socketResponse.stream.asBroadcastStream() as Stream<String>;
}

StreamSocket streamSocket = StreamSocket();