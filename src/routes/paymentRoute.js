const express = require("express");
const { sendPaymentKey } = require("../lib/paymentHandler");
const router = express.Router();

router.post("/", sendPaymentKey);

module.exports = router;
