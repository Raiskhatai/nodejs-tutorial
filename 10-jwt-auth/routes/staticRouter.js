const express = require("express");
const router = express.Router();
const URL = require("../models/url");
const { nanoid } = require("nanoid");

router.get("/", async (req, res) => {
  console.log(req.user);
  if (!req.user) return res.redirect("/login");
  const allUrls = await URL.find({ createdBy: req.user._id });
  console.log(allUrls);
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
