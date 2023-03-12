const express = require("express");
const userAuthRoute = require("./routes/userAuthRoutes");

const app = express();

app.use("/api/auth", userAuthRoute);

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || "An unknown error occurred!" });
});

app.listen(3000);
