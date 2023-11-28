const mongoose = require("mongoose");

const articleSchema = mongoose.Schema({
  title: String,
  image: String,
  publisher: {
    name: String,
    email: String,
    logo: String,
  },
  tags: [String],
  category: String,
  description: String,
  views: { type: Number, default: 0 },
  isPremium: { type: Boolean, default: false },
  approved: { type: Boolean, default: false },
  createdAt: {
    type: String,
    default: Date.now,
  },
});

module.exports = articleSchema;
