const express = require("express");
const {
  createPublisher,
  getAllPublisher,
  deletePublisher,
} = require("../lib/adminRouteHandler");
const verifyToken = require("../middlewares/verifyToken");
const verifyAdmin = require("../middlewares/verifyAdmin");
const router = express.Router();

router.post("/create-publisher", verifyToken, verifyAdmin, createPublisher);
router.get("/publishers", getAllPublisher);
router.delete("/publishers/:id", verifyToken, verifyAdmin, deletePublisher);

module.exports = router;
