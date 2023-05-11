const ChatsModel = require("../models/Chats");

const seedChats = async (req, res) => {
  try {
    await ChatsModel.deleteMany();
    await ChatsModel.create([
      {
        timestamp: new Date("2023-01-01T10:00Z"),
        senderUUID: 10,
        receiverUUID: 11,
        message:
          "Good morning Karen, I need you to send me the file for the project.",
        hasScheduledBump: false,
      },
      {
        timestamp: new Date("2023-01-01T10:10Z"),
        senderUUID: 11,
        receiverUUID: 10,
        message: "Good morning Alex, will do so asap.",
        hasScheduledBump: false,
      },
    ]);
    res.json({ status: "ok", msg: "seeding successful" });
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ status: "error", msg: "seeding error" });
  }
};

const getChats = async (req, res) => {
  try {
    const allChats = await ChatsModel.find();
    res.json(allChats);
  } catch (error) {
    console.error(error.message);
    res.json({ status: "error", msg: "cannot get chats" });
  }
};

const getChatsBySender = async (req, res) => {
  try {
    const chats = await ChatsModel.find({ senderUUID: req.params.id });
    res.json(chats);
  } catch (error) {
    console.error(error.message);
    res.json({ status: "error", msg: "error getting chats via sender uuid" });
  }
};

const getChatsByReceiver = async (req, res) => {
  try {
    const chats = await ChatsModel.find({ receiverUUID: req.params.id });
    res.json(chats);
  } catch (error) {
    console.error(error.message);
    res.json({ status: "error", msg: "error getting chats via receiver uuid" });
  }
};

const putChats = async (req, res) => {
  try {
    const newChat = {
      timestamp: new Date(req.body.timestamp),
      senderUUID: req.body.senderUUID,
      receiverUUID: req.body.receiverUUID,
      message: req.body.message,
      hasScheduledBump: req.body.hasScheduledBump,
    };
    if ("scheduledBump" in req.body)
      newChat.scheduledBump = new Date(req.body.scheduledBump);
    await ChatsModel.create(newChat);
    res.json({ status: "ok", msg: "chat saved" });
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ status: "error", msg: "error saving chat" });
  }
};

module.exports = {
  seedChats,
  getChats,
  getChatsBySender,
  getChatsByReceiver,
  putChats,
};
