const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userMessageBoxSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  // unseenMessages: {
  //     type: Number
  // },
  outMessages: [
    {
      receiverid: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "User",
      },
      message: {
        type: String,
        required: true,
      },
      time: {
        type: String,
        required: true,
      },
    },
  ],
  inMessages: [
    {
      senderId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "User",
      },
      message: {
        type: String,
        required: true,
      },
      time: {
        type: String,
        required: true,
      },
    },
  ],
});

module.exports = mongoose.model("Usermessagebox", userMessageBoxSchema);
