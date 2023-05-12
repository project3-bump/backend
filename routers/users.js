const express = require("express");
const {
  seedUsers,
  getUsers,
  postUsers,
  patchUsers,
} = require("../controllers/users");
const router = express.Router();

router.get("/seed", seedUsers);
router.get("/", getUsers);
router.post("/:id", postUsers);
router.patch("/:id", patchUsers);

module.exports = router;
