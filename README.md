
## Run Locally

Clone the project

```bash
  git clone https://github.com/RukshanJS/websockets-nestjs-flutter.git
```

Go to the project directory

```bash
  cd websockets-nestjs-flutter
```

Install dependencies for backend

```bash
  cd backend/server-timer-backend && npm install
```

Start the backend server

```bash
  npm run start:dev
```

Navigate to the frontend application

```bash
  cd frontend/server_timer_frontend
```

Install dependencies for frontend

```bash
  flutter pub get
```

IMPORTANT : You have to replace the value `192.168.X.X` in `/lib/sockets/socket_service.dart` with IP address of your `localhost`.

Run flutter app

```bash
  flutter run
```