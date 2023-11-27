const mongoose = require("mongoose");
const articleSchema = require("../schemas/articleSchema");
const Article = mongoose.model("Article", articleSchema);

// get all articles
const getArticles = async (req, res) => {
  try {
    const result = await Article.find();
    res.send(result);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// get all articles
const getArticlesByPublisherEmail = async (req, res) => {
  try {
    const query = { "publisher.email": req.query.email };
    const result = await Article.find(query);
    res.send(result);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// get most views articles
const getTrendingArticle = async (req, res) => {
  try {
    const result = await Article.find().sort({ views: -1 }).limit(6);
    res.send(result);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// get single article by id
const getArticleById = async (req, res) => {
  try {
    const filter = { _id: req.params.id };
    const result = await Article.findOne(filter);
    result.views += 1;
    result.save();
    res.send(result);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// create a new Article
const createArticle = async (req, res) => {
  try {
    await Article.create(req.body);
    res.status(201).send({ message: "Article created successfully" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

module.exports = {
  createArticle,
  getArticles,
  getTrendingArticle,
  getArticleById,
  getArticlesByPublisherEmail,
};
