const express = require("express");
const User = require("../models/userModel");
const httpError = require("../models/httpErrorModel");
const UserMessageBox = require("../models/userMessageBoxModel");
const mongoose = require("mongoose");

const router = express.Router();

router.post("/send", async (req, res, next) => {
  const { senderId, receiverId, message, time } = req.body;
  let isContactValid, receiver, isUsersMessageBoxExist;

  try {
    isContactValid = await User.findOne({contacts: {$in: [receiverId]}});
    isUsersMessageBoxExist =
      (await UserMessageBox.findOne({
        user1: senderId,
        user2: receiverId,
      })) ||
      (await UserMessageBox.findOne({
        user1: receiverId,
        user2: senderId,
      }));
  } catch (err) {
    console.log(err);
    const error = new httpError("Something went wrong", 500);
    return next(error);
  }

  if (!isContactValid || !isUsersMessageBoxExist) {
    const error = new httpError("User is not in your contacts", 401);
    return next(error);
  }

  try {
    const sess = await mongoose.startSession();
    sess.startTransaction();
    isUsersMessageBoxExist.allMessages.push({
      userId: senderId,
      message,
      time
    });
    await isUsersMessageBoxExist.save({ session: sess });

    // sender.outMessages.push({ receiverid: receiverId, message, time });
    // receiver.inMessages.push({ senderId: senderId, message, time });
    // await receiver.save({ session: sess });
    await sess.commitTransaction();
  } catch (err) {
    console.log(err);
    const error = new httpError("message not sent", 424);
    return next(error);
  }

  // console.log(new Date(time).getHours())

  res.status(201).json({ message: "sent successfully" });
});


router.get("/:id", async (req, res, next) => {
  const { senderId, receiverId, message, time } = req.body;
  let sender, receiver;

  try {
    sender = await UserMessageBox.findOne({ userId: senderId });
    receiver = await UserMessageBox.findOne({ userId: receiverId });
  } catch (err) {
    console.log(err);
    const error = new httpError("Something went wrong", 500);
    return next(error);
  }

  if (!sender && !receiver) {
    const error = new httpError("User does not exist", 401);
    return next(error);
  }

  try {
    const sess = await mongoose.startSession();
    sess.startTransaction();
    sender.outMessages.push({ receiverid: receiverId, message, time });
    await sender.save({ session: sess });
    receiver.inMessages.push({ senderId: senderId, message, time });
    await receiver.save({ session: sess });
    await sess.commitTransaction();
  } catch (err) {
    console.log(err);
    const error = new httpError("message not sent", 424);
    return next(error);
  }

  res.status(201).json({ message: "sent successfully" });
});

module.exports = router;
