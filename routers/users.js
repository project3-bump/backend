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
  getAllReports,
  postUserNameAndPicByUUID,
} = require("../controllers/users");
const router = express.Router();

router.get("/seed", seedUsers);
router.get("/", getUsers);
router.post("/:id", postUsers);
router.patch("/:id", patchUsers);
router.post("/uuid/:id", postUserUUIDByID);
router.post("/pulse/:id", postUserPulses);
router.get("/pulse", getMoodsOfDirectReport);
router.get("/pulse/all", getAllReports);
router.put("/oneuser", getOneUserMoodData);
router.post("/namepiconly/namepiconly", postUserNameAndPicByUUID);

module.exports = router;
