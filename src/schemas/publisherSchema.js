const mongoose = require("mongoose");

const publisherSchema = mongoose.Schema({
  publisher: String,
  logo: String,
  createAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = publisherSchema;
