const mongoose = require("mongoose");

const UsersSchema = new mongoose.Schema(
  {
    uuid: { type: Number, require: true, min: 10, minLength: 2 },
    name: { type: String, require: true, minLength: 1, maxLength: 100 },
    hash: { type: String, require: true },
    title: { type: String, require: true, minLength: 1, maxLength: 50 },
    profilePicture: { type: String, require: true, minLength: 1 },
    isManager: { type: Boolean, require: true, default: false },
    moodData: { type: [Object], require: true },
    directReports: { type: [Number] },
    managerUUID: { type: Number, default: 10 },
  },
  { collection: "users" }
);

module.exports = mongoose.model("Users", UsersSchema);
