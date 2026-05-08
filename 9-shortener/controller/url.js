const { nanoid } = require("nanoid");
const URL = require("../model/url");
const { json } = require("express");

async function handleGenerateNewShortURL(req, res) {
  const body = req.body;
  const dataAndtime = new Date();
  const stringifyDateAndTime = dataAndtime.toLocaleString();
  // dataAndtime.getFullYear() +
  // dataAndtime.getMonth() +
  // dataAndtime.getDay() +
  // dataAndtime.getTime();
  if (!body.url) return res.status(400).json({ Error: "URL is required" });
  const shortId = nanoid(8);
  await URL.create(shortId, body.url, JSON.stringify(stringifyDateAndTime));

  res.json({ id: shortId });
}

module.exports = { handleGenerateNewShortURL };
