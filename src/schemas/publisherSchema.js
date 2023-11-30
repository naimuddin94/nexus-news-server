const mongoose = require("mongoose");

const publisherSchema = mongoose.Schema({
  publisher: { type: String, required: true, unique: true },
  logo: String,
  createAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = publisherSchema;
