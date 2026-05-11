const express = require("express");
const router = express.Router();
const url = require("../model/url");

router.get("/", async (req, res) => {
  const allUrl = await url.getAllValue();
  return res.render("home", {
    urls: allUrl,
  });
});

router.get("/signup", (req, res) => {
  return res.render("signup");
});

router.get("/login", (req, res) => {
  return res.render("login");
});

module.exports = router;
