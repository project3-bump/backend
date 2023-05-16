const mongoose = require("mongoose");

const ContentBankSchema = new mongoose.Schema(
  {
    onlyManager: { type: Boolean, require: true },
    topic: { type: String, require: true },
    topicID: { type: Number, require: true },
    topicPrompts: { type: Array, require: true },
    contentFillers: { type: Array, require: true },
  },
  { collection: "contentBank" }
);

module.exports = mongoose.model("ContentBank", ContentBankSchema);
