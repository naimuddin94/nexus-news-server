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
    const email = req.body.email;
    isExist = await User.findOne({ email: email });
    if (isExist) {
      return res.status(200).json({ message: "User already exists" });
    }
    await User.create(req.body);
    res.status(201).json({ message: "User saved successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
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

// update user role
const updateUserRole = async (req, res) => {
  try {
    const userId = req.params.userId;
    const { newRole } = req.body;
    const user = await User.findByIdAndUpdate(
      userId,
      { role: newRole },
      { new: true }
    );
    res.json({ message: "Role updated successfully" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// update user role
const makePublisher = async (req, res) => {
  try {
    const userId = req.params.userId;
    const { newRole } = req.body;
    const user = await User.findByIdAndUpdate(
      userId,
      { role: newRole },
      { new: true }
    );
    res.json({ message: "Role updated successfully" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// make user premium
const makePremium = async (req, res) => {
  try {
    const { email, duration } = req.body;
    const user = await User.findOne({ email });
    user.isPremium = true;
    user.save();
    res.status(200).send({ message: "Update successfully" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// get total user length
const getCountUsers = async (req, res) => {
  try {
    const totalUsers = await User.countDocuments();
    const normalUsers = await User.countDocuments({ isPremium: false });
    const premiumUsers = await User.countDocuments({ isPremium: true });
    res.send({ totalUsers, normalUsers, premiumUsers });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

module.exports = {
  getAllUsers,
  createUser,
  findUserByEmail,
  updateUserRole,
  makePublisher,
  makePremium,
  getCountUsers,
  User,
};
