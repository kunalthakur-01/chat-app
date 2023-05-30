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

mongoose
  .connect(MONGODB_URI)
  .then((result) => {
    console.log("connected");
    const server = app.listen(5000);
    
    const io = require('socket.io')(server, {
      cors: {
        origin: '*',
      }
    });
    io.on('connection', socket => {
      console.log('client connected');
    })
  })
  .catch((err) => {
    console.log(err);
  });
