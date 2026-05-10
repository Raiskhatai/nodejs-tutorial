const express = require("express");
const router = express.Router();
const {
  handleGenerateNewShortURL,
  findOneAndUpdate,
  getAll,
} = require("../controller/url");

// router.get("/", getAll);
router.post("/", handleGenerateNewShortURL);
router.get("/:shortId", findOneAndUpdate);

module.exports = router;
