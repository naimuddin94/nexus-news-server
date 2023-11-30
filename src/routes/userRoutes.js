const express = require("express");
const router = express.Router();
const {
  createUser,
  getAllUsers,
  findUserByEmail,
  updateUserRole,
  makePremium,
  getCountUsers,
} = require("../lib/userHandler");
const verifyToken = require("../middlewares/verifyToken");
const verifyAdmin = require("../middlewares/verifyAdmin");

// get all users
router.get("/", verifyToken, verifyAdmin, getAllUsers);

// get all users length
router.get("/user-length", getCountUsers)

// create a new user
router.post("/", createUser);

// find user by email
router.get("/:email", findUserByEmail);

// user role update
router.put("/:userId", verifyToken, verifyAdmin, updateUserRole);

// make user premium
router.patch("/make-premium", makePremium);

module.exports = router;
