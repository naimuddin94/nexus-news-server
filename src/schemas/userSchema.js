const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  role: {
    type: String,
    enum: ["admin", "publisher", "normal"],
    default: "normal",
  },
  isPremium: { type: Boolean, default: false },
  createAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = userSchema;
