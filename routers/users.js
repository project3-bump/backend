const express = require("express");
const {
  seedUsers,
  getUsers,
  postUsers,
  patchUsers,
  postUserUUIDByID,
  postUserPulses,
  getMoodsOfDirectReport,
  getOneUserMoodData,
} = require("../controllers/users");
const router = express.Router();

router.get("/seed", seedUsers);
router.get("/", getUsers);
router.post("/:id", postUsers);
router.patch("/:id", patchUsers);
router.post("/uuid/:id", postUserUUIDByID);
router.post("/pulse/:id", postUserPulses);
router.get("/pulse", getMoodsOfDirectReport);
router.get("/oneuser", getOneUserMoodData);

module.exports = router;
