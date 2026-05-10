const express = require("express");
const router = express.Router();
const url = require("../model/url");

router.get("/", async (req, res) => {
  const allUrl = await url.getAllValue();
  return res.render("home", {
    urls: allUrl,
  });
});

module.exports = router;
