const express = require("express");
const {
  createArticle,
  getArticles,
  getArticleById,
  getArticlesByPublisherEmail,
  getTrendingArticle,
} = require("../lib/articleHandler");
const router = express.Router();

// get all articles
router.get("/", getArticles);

// get article by publisher email
router.get("/owner", getArticlesByPublisherEmail);

// get most views 6 article
router.get("/views", getTrendingArticle);

// find article by id
router.get("/:id", getArticleById);

// create a new article
router.post("/", createArticle);

module.exports = router;
