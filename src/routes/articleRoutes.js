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
  premiumByAdmin,
  deleteArticle,
  updateArticle,
} = require("../lib/articleHandler");
const verifyToken = require("../middlewares/verifyToken");
const verifyAdmin = require("../middlewares/verifyAdmin");
const router = express.Router();

// get all articles
router.get("/", getArticles);

// get all articles
router.get("/approved", getApprovedArticles);

// get article by publisher email
router.get("/owner", verifyToken, getArticlesByPublisherEmail);

// get article by user search value
router.get("/query", getArticlesByUserSearch);

// get most views 6 article
router.get("/views", getTrendingArticle);

// find article by id
router.get("/:id", getArticleById);

// create a new article
router.post("/", verifyToken, createArticle);

// approved article by admin
router.put("/:id", verifyToken, verifyAdmin, approvedByAdmin);

// make premium by admin
router.put("/make-premium/:id", verifyToken, premiumByAdmin);

// article update
router.patch("/update/:id", updateArticle);

// delete article
router.delete("/:id", verifyToken, deleteArticle);


module.exports = router;
