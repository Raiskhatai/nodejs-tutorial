const express = require("express");
const router = express.Router();
const url = require("../model/url");
const { restrictToLoggedInUserOnly } = require("../middleware/auth");

router.get("/", restrictToLoggedInUserOnly, async (req, res) => {
  const allUrl = await url.getUrlByUser(req.user.sr_no);
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
