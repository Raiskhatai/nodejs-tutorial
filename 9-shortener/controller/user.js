const express = require("express");
const { findOne, create } = require("../model/user");
const { v4: uuidv4 } = require("uuid");
const { setUser } = require("../service/auth");

async function handleUserSignUp(req, res) {
  const { name, email, password } = req.body;
  await create(name, email, password);
  return res.redirect("/");
}

async function handleUserLogin(req, res) {
  const { email, password } = req.body;
  const user = await findOne(email, password);
  if (!user)
    return res.render("login", { error: "Invalid Email Or Password" });
  const sessionId = uuidv4();
  setUser(sessionId, user);
  res.cookie("uid", sessionId); // res.cookie save kar rhi browser mey uid name se sessionId jo (number) hey.
  return res.redirect("/");
}

module.exports = { handleUserSignUp, handleUserLogin };
