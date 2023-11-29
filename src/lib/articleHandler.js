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
const getApprovedArticles = async (req, res) => {
  try {
    const query = { approved: true };
    const result = await Article.find(query);
    res.send(result);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// get articles by email address
const getArticlesByPublisherEmail = async (req, res) => {
  try {
    const query = { "publisher.email": req.query.email };
    const result = await Article.find(query);
    res.send(result);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// get articles by user query parameters
const getArticlesByUserSearch = async (req, res) => {
  try {
    const { search } = req.query;
    let query = {};
    if (search) {
      query.$or = [
        { title: { $regex: search, $options: "i" } },
        { tags: { $regex: new RegExp(search, "i") } },
      ];
    }
    const articles = await Article.find(query);
    res.send(articles);
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

// approves Article by admin
const approvedByAdmin = async (req, res) => {
  try {
    const id = req.params.id;
    const { approved } = req.body;
    await Article.findByIdAndUpdate(id, { approved }, { new: true });
    res.json({ message: "Approved successfully" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const premiumByAdmin = async (req, res) => {
  try {
    const id = req.params.id;
    const { isPremium } = req.body;
    await Article.findByIdAndUpdate(id, { isPremium }, { new: true });
    res.json({ message: "premium status change successfully" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// delete article by admin
const deleteArticle = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await Article.findByIdAndDelete(id);

    if (!result) {
      return res.status(404).json({ message: "Article not found" });
    }

    return res.status(200).json({ message: "Article deleted successfully" });
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
  approvedByAdmin,
  getArticlesByUserSearch,
  getApprovedArticles,
  premiumByAdmin,
  deleteArticle,
};
