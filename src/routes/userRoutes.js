const express = require("express");
const router = express.Router();
const {
  createUser,
  getAllUsers,
  findUserByEmail,
  updateUserRole,
} = require("../lib/userHandler");
const verifyToken = require("../middlewares/verifyToken");

// get all users
router.get("/", verifyToken, getAllUsers);

// create a new user
router.post("/", createUser);

// find user by email
router.get("/:email", verifyToken, findUserByEmail);

// user role update
router.put("/:userId", verifyToken, updateUserRole);

module.exports = router;
