const MONGODB_URI =
  "mongodb+srv://kunal-thakur:kunal25@cluster0.bfzhgmk.mongodb.net/chatting-app?retryWrites=true&w=majority";

const express = require("express");
const mongoose = require("mongoose");
const userAuthRoute = require("./routes/userAuthRoutes");
const userMessageBoxRoute = require("./routes/userMessageBoxRoute");
const userContactsRoute = require("./routes/userContactsRoutes");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-width, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");

  next();
});

app.use("/api/auth", userAuthRoute);

app.use("/api/message", userMessageBoxRoute);

app.use("/api/contact", userContactsRoute);

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || "An unknown error occurred!" });
});

global.onlineUsers = new Map();

mongoose
  .connect(MONGODB_URI)
  .then((result) => {
    console.log("connected");
    const server = app.listen(5000);

    const getSocket = require("./socket");
    const io = getSocket.init(server);
    io.on("connection", (socket) => {
      console.log("client connected", socket.id);
      global.chatSocket = socket;

      // socket.on("add-user", (userId) => {
      //   console.log(userId);
      //   onlineUsers.set(userId, socket.id);
      // });
      socket.on("add-user", (userId) => {
        getSocket.addOnlineUsers(userId, socket.id);
      });

      // socket.on("send-message", (data) => {
      //   const sendUserSocket = onlineUsers.get(data.to);
      //   if(sendUserSocket) socket.to(sendUserSocket).emit('msg-receive', data.msg);
      // });

      // socket.on("send-message", getSocket.sendMessage);
    });
  })
  .catch((err) => {
    console.log(err);
  });
