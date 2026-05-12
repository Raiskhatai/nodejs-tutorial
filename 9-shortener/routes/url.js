const express = require("express");
const router = express.Router();
const { restrictToLoggedInUserOnly } = require("../middleware/auth");

const {
  handleGenerateNewShortURL,
  findOneAndUpdate,
  getAll,
} = require("../controller/url");

// router.get("/", getAll);
router.post("/", restrictToLoggedInUserOnly, handleGenerateNewShortURL);
router.get("/:shortId", findOneAndUpdate);

module.exports = router;
