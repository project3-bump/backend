const express = require("express");
const {
  seedUsers,
  getUsers,
  postUsers,
  patchUsers,
  postUserUUIDByID,
} = require("../controllers/users");
const router = express.Router();

router.get("/seed", seedUsers);
router.get("/", getUsers);
router.post("/:id", postUsers);
router.patch("/:id", patchUsers);
router.post("/uuid/:id", postUserUUIDByID);

module.exports = router;
