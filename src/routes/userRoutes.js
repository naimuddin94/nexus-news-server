const express = require("express");
const router = express.Router();
const { createUser, getAllUsers, findUserByEmail } = require("../lib/userHandler");

// get all users
router.get("/", getAllUsers);

// create a new user
router.post("/", createUser);

// find user by email
router.get("/:email", findUserByEmail)

module.exports = router;
