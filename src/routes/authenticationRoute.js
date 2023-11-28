const express = require("express");
const createAuthCookie = require("../lib/userTokenHandler");
const router = express.Router();

router.post("/jwt", createAuthCookie);
router.post("/logout", (req, res) => {});

module.exports = router;
