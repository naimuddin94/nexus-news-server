const express = require("express");
const {
  createAuthCookie,
  clearUserCookie,
} = require("../lib/userTokenHandler");
const router = express.Router();

router.post("/jwt", createAuthCookie);
router.post("/logout", clearUserCookie);

module.exports = router;
