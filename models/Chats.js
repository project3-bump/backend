const mongoose = require("mongoose");

const ChatsSchema = new mongoose.Schema(
  {
    timestamp: { type: Date, require: true },
    senderUUID: { type: Number, require: true },
    receiverUUID: { type: Number, require: true },
    message: { type: String, require: true, minLength: 1 },
    hasScheduledBump: { type: Boolean, require: true },
    scheduledBump: { type: Date },
  },
  { collection: "chats" }
);

module.exports = mongoose.model("Chats", ChatsSchema);
