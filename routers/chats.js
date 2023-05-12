const express = require("express");
const {
  seedChats,
  getChats,
  getChatsBySender,
  getChatsByReceiver,
  putChats,
} = require("../controllers/chats");
const router = express.Router();

router.get("/seed", seedChats);
router.get("/", getChats);
router.post("/sender/:id", getChatsBySender);
router.post("/receiver/:id", getChatsByReceiver);
router.put("/", putChats);

module.exports = router;
