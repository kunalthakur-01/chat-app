const express = require("express");
const User = require("../models/userModel");
const httpError = require("../models/httpErrorModel");

const router = express.Router();

router.post("/add", async (req, res, next) => {
  const { userId, contact } = req.body;
  let existingUser, isContactValid;

  try {
    existingUser = await User.findById(userId, "contacts").populate(
      "contacts",
      "messageBox"
    );
    isContactValid = await User.findById(contact);
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

  try {
    existingUser.contacts.push(contact);
    await existingUser.save();
  } catch (err) {
    console.log(err);
    const error = new httpError("Something went wrong", 500);
    return next(error);
  }

  existingUser = await User.findById(userId, "contacts")
    .populate("contacts", "messageBox")
    .populate({
      path: "contacts",
      populate: { path: "messageBox" },
      select: "messageBox",
    });

  //   console.log(existingUser);
  res.status(201).json({ user: existingUser });
});

module.exports = router;
