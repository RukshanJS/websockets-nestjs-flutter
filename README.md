
# Output

<img src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/lizparehhc4mvl48kbig.gif" width="200">

# Setup
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
  cd backend/server-timer-backend
```
```bash
  npm install
```

Start the backend server

```bash
  npm run start:dev
```

At the root folder `websockets-nestjs-flutter`, Navigate to the frontend application

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

# Documentation

[Article on dev.to](https://dev.to/rukshanjs/part-13-how-to-create-a-server-side-timer-using-websockets-with-socketio-nestjs-and-flutter-3821)


# Support me

Do you think I deserve a cup of coffee for this project? 😃

<a href="https://www.buymeacoffee.com/rukshanjs" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" ></a>