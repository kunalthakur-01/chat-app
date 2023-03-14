const express = require("express");
const User = require("../models/userModel");
const httpError = require("../models/httpErrorModel");
const userMessageBox = require("../models/userMessageBoxModel");
const mongoose = require("mongoose");

const router = express.Router();

router.post("/send", async (req, res, next) => {
  const { senderId, receiverId, message } = req.body;
  let sender, receiver;

  try {
    sender = await userMessageBox.findOne({userId: senderId});
    receiver = await userMessageBox.findOne({userId: receiverId});
  } catch (err) {
    console.log(err);
    const error = new httpError("Something went wrong", 500);
    return next(error);
  }

  console.log(sender, receiver)

  if (!sender && !receiver) {
    const error = new httpError("User does not exist", 401);
    return next(error);
  }

  try {
    const sess = await mongoose.startSession();
    sess.startTransaction();
    sender.outMessages.push(message);
    receiver.inMessages.push(message);
    sender.save();
    receiver.save();
    await sess.commitTransaction();
  } catch (err) {
    console.log(err)
    const error = new httpError("message not sent", 424);
    return next(error);
  }

  res.status(200).json({message: "sent successfully"});
});

module.exports = router;
