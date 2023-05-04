const express = require("express");
const User = require("../models/userModel");
const httpError = require("../models/httpErrorModel");
const userMessageBox = require('../models/userMessageBoxModel');
const mongoose = require("mongoose");

const router = express.Router();

router.post("/login", async (req, res, next) => {
  const { email, phone, password } = req.body;
  let existingUser;

  try {
    if (email) existingUser = await User.findOne({ email }).populate('contacts');
    else if (phone) existingUser = await User.findOne({ phone }).populate('contacts');
  } catch (err) {
    console.log(err);
    const error = new httpError("Login failed!", 500);
    return next(error);
  }

  if (!existingUser) {
    const error = new httpError("User does'nt exist, create an account", 401);
    return next(error);
  }

  if (existingUser.password !== password) {
    const error = new httpError("Invalid credentials!", 401);
    return next(error);
  }

  res.status(200).json({ user: existingUser });
});

router.post("/signup", async (req, res, next) => {
  const { name, phone, email, image, password } = req.body;
  let existingUser;

  try {
    existingUser = await User.findOne({ email, phone });
  } catch (err) {
    console.log(err);
    const error = new httpError("Signup failed!", 500);
    return next(error);
  }

  // console.log(existingUser)

  if (existingUser) {
    const error = new httpError("User already exist", 422);
    return next(error);
  }

  const newUser = new User({
    name,
    phone,
    email,
    image,
    password,
    contacts: [],
    pinnedContacts: [],
  });

  const newMessageBox = new userMessageBox({
    userId: newUser.id,
    outMessages: [],
    inMessages: []
  })

  newUser.messageBox = newMessageBox.id;

  // console.log(newUser, newMessageBox)

  try {
    const sess = await mongoose.startSession();
    sess.startTransaction();
    await newUser.save();
    await newMessageBox.save();
    await sess.commitTransaction();
  } catch (err) {
    console.log(err)
    const error = new httpError("Signup failed", 500);
    return next(error);
  }

  res.status(201).json({ user: newUser });
});

module.exports = router;
