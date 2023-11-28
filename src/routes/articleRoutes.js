const express = require("express");
const {
  createArticle,
  getArticles,
  getArticleById,
  getArticlesByPublisherEmail,
  getTrendingArticle,
  approvedByAdmin,
  getArticlesByUserSearch,
  getApprovedArticles,
} = require("../lib/articleHandler");
const router = express.Router();

// get all articles
router.get("/", getArticles);

// get all articles
router.get("/approved", getApprovedArticles);

// get article by publisher email
router.get("/owner", getArticlesByPublisherEmail);

// get article by user search value
router.get("/query", getArticlesByUserSearch);

// get most views 6 article
router.get("/views", getTrendingArticle);

// find article by id
router.get("/:id", getArticleById);

// create a new article
router.post("/", createArticle);

// approved article by admin
router.put("/:id", approvedByAdmin);

module.exports = router;
