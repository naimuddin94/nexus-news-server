const express = require("express");
const router = express.Router();
const {
  createUser,
  getAllUsers,
  findUserByEmail,
  updateUserRole,
} = require("../lib/userHandler");

// get all users
router.get("/", getAllUsers);

// create a new user
router.post("/", createUser);

// find user by email
router.get("/:email", findUserByEmail);

// user role update
router.put("/:userId", updateUserRole);

module.exports = router;
