require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./db/db");

const users = require("./routers/users");
const chats = require("./routers/chats");
const auth = require("./routers/auth");
const contentBank = require("./routers/contentBank");

const app = express();
app.use(cors()); // VERY IMPORTANT
app.use(express.json()); // VERY IMPORTANT
app.use(express.urlencoded({ extended: false })); // IMPORTANT TO PASS IN FILES

connectDB();

app.use("/bump/auth", auth);
app.use("/bump/users", users);
app.use("/bump/chats", chats);
app.use("/bump/contentbank", contentBank);

const PORT = process.env.PORT || 5002;

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
