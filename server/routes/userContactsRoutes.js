const express = require("express");
const User = require("../models/userModel");
const httpError = require("../models/httpErrorModel");
const UserMessageBox = require("../models/userMessageBoxModel");
const mongoose = require("mongoose");

const router = express.Router();

router.post("/add", async (req, res, next) => {
  const { userId, contact } = req.body;
  let existingUser, isContactValid, isUsersMessageBoxExist;

  try {
    // existingUser = await User.findById(userId, "contacts").populate(
    //   "contacts",
    //   "messageBox"
    // );
    existingUser = await User.findById(userId);
    isContactValid = await User.findById(contact);
    isUsersMessageBoxExist = await UserMessageBox.findOne({
      user1: userId,
      user2: contact,
    });

    if (!isUsersMessageBoxExist)
      await UserMessageBox.findOne({ user1: contact, user2: userId });
  } catch (err) {
    const error = new httpError("Something went wrong!", 500);
    return next(error);
  }

  if (!existingUser) {
    const error = new httpError("Invalid userId", 401);
    return next(error);
  }

  if (!isContactValid) {
    const error = new httpError("Invalid contact id", 401);
    return next(error);
  }

  if (isUsersMessageBoxExist) {
    let isUserAlreadyInContact;

    try {
      isUserAlreadyInContact = existingUser.contacts.find((cont) => cont.toString() === isUsersMessageBoxExist.id);
      // isUserAlreadyInContact = await User.findOne({contacts: contact});
    } catch (err) {
      console.log(err);
      const error = new httpError("Something went wrong", 500);
      return next(error);
    }

    if (isUserAlreadyInContact) {
      const error = new httpError("User already in contacts", 422);
      return next(error);
    }

    try {
      const sess = await mongoose.startSession();
      existingUser.contacts.push(isUsersMessageBoxExist.id);
      await existingUser.save({ session: sess });
      sess.startTransaction();
      await sess.commitTransaction();
    } catch (err) {
      console.log(err);
      const error = new httpError("Something went wrong", 500);
      return next(error);
    }

    return res.status(201).json({ user: existingUser });
  }

  const newMessageBox = new UserMessageBox({
    user1: userId,
    user2: contact,
    outMessages: [],
    inMessages: [],
    allMessages: [],
  });

  try {
    const sess = await mongoose.startSession();
    sess.startTransaction();
    existingUser.contacts.push(newMessageBox.id);
    await existingUser.save({ session: sess });
    await newMessageBox.save({ session: sess });
    await sess.commitTransaction();
  } catch (err) {
    console.log(err);
    const error = new httpError("Something went wrong", 500);
    return next(error);
  }

  // existingUser = await User.findById(userId, "contacts")
  //   .populate("contacts", "messageBox")
  //   .populate({
  //     path: "contacts",
  //     populate: { path: "messageBox" },
  //     select: "messageBox",
  //   });

  //   console.log(existingUser);
  res.status(201).json({ user: existingUser });
});

module.exports = router;
