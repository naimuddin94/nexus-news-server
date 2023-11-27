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
    required: true,
  },
  isPremium: { type: Boolean, required: true },
  isPublisher: { type: Boolean, required: true },
  createAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = userSchema;
