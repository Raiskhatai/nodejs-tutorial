const express = require("express");
const router = express.Router();
const URL = require("../models/url");
const { nanoid } = require("nanoid");

router.get("/", async (req, res) => {
  const allUrls = await URL.find({});
  const shortID = nanoid(8);
  return res.render("home", { urls: allUrls, id: shortID });
});

router.get("/signup", (req, res) => {
  return res.render("signup");
});

router.get("/login", (req, res) => {
  return res.render("login");
});

module.exports = router;
