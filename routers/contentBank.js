const express = require("express");
const {
  seedContentBank,
  getManagerContentBank,
  getNonManagerContentBank,
} = require("../controllers/contentBank");
const router = express.Router();

router.get("/seed", seedContentBank);
router.get("/manager", getManagerContentBank);
router.get("/common", getNonManagerContentBank);

module.exports = router;
