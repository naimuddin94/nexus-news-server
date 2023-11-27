const mongoose = require("mongoose");
const userSchema = require("../schemas/userSchema");
const User = new mongoose.model("User", userSchema);

// get all users
const getAllUsers = async (req, res) => {
  try {
    const result = await User.find();
    res.send(result);
  } catch (error) {
    res.send(error.message);
  }
};

// create a new user
const createUser = async (req, res) => {
  try {
    await User.create(req.body);
    res.status(201).send({ message: "User saved successfully" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// find user by email
const findUserByEmail = async (req, res) => {
  try {
    const query = { email: req.params.email };
    const result = await User.findOne(query);
    res.send(result);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

module.exports = { getAllUsers, createUser, findUserByEmail };
