const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: Number,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  image: String,
  password: {
    type: String,
    required: true,
  },
  messageBoxes: [
    {
      type: Schema.Types.ObjectId,
      ref: "Usermessagebox",
    },
  ],
  contacts: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  pinnedContacts: [
    {
      type: Schema.Types.ObjectId,
      ref: "Usermessagebox",
    },
  ],
});

module.exports = mongoose.model("User", userSchema);
