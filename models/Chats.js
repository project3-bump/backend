const mongoose = require("mongoose");

const ChatsSchema = new mongoose.Schema(
  {
    senderUUID: { type: Number, require: true },
    receiverUUID: { type: Number, require: true },
    message: { type: String, require: true, minLength: 1 },
    timesent: { type: Date, default: Date.now },
    hasScheduledBump: { type: Boolean, default: false },
    bumpDateTime: { type: String },
  },
  { collection: "chats" }
);

module.exports = mongoose.model("Chats", ChatsSchema);
