const MONGODB_URI =
  "mongodb+srv://kunal-thakur:kunal25@cluster0.bfzhgmk.mongodb.net/chatting-app?retryWrites=true&w=majority";

const express = require("express");
const mongoose = require("mongoose");
const userAuthRoute = require("./routes/userAuthRoutes");
const userMessageBoxRoute = require("./routes/userMessageBoxRoute");
const bodyParser = require("body-parser");

const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api/auth", userAuthRoute);

app.use("/api/message", userMessageBoxRoute);

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
    app.listen(5000);
  })
  .catch((err) => {
    console.log(err);
  });
