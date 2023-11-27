const mongoose = require("mongoose");
const articleSchema = require("../schemas/articleSchema");
const Article = mongoose.model("Article", articleSchema);

// create a new Article
const createArticle = async (req, res) => {
  try {
    await Article.create(req.body);
    res.status(201).send({ message: "Article created successfully" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

module.exports = { createArticle };
