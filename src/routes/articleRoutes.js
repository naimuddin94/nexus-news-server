const express = require("express");
const { createArticle } = require("../lib/articleHandler");
const router = express.Router();

// get all articles
router.get("/", async (req, res) => {});

// find article by id
router.get("/:id", async (req, res) => {});

// create a new article
router.post("/", createArticle);

module.exports = router;
