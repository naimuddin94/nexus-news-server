const mongoose = require("mongoose");

const articleSchema = mongoose.Schema({
  title: String,
  image: String,
  publisher: {
    name: String,
    logo: String,
  },
  tags: [String],
  description: String,
  content: String,
  views: Number,
  isPremium: Boolean,
  approved: Boolean,
  createdAt: {
    type: String,
    default: Date.now,
  },
});

module.exports = articleSchema;
