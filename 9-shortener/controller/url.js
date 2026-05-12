const { nanoid } = require("nanoid");
const URL = require("../model/url");

async function handleGenerateNewShortURL(req, res) {
  const body = req.body;

  if (!body.url) return res.status(400).json({ Error: "URL is required" });

  const shortId = nanoid(8);

  const dataAndtime = new Date();
  const stringifyDateAndTime = dataAndtime.toLocaleString();

  await URL.create(shortId, body.url, req.user.sr_no);
  const allUrls = await URL.getUrlByUser(req.user.sr_no);

  return res.render("home", { id: shortId, urls: allUrls });
}

async function findOneAndUpdate(req, res) {
  const shortId = req.params.shortId;
  const entry = await URL.findAndUpdate(shortId);
  console.log(entry.redirectURL);
  res.redirect(entry.redirectURL);
}

// async function getAll(req, res) {
//   const data = await URL.getAllValue();
//   console.log(data);
//   return res.json({ result: data });
// }

module.exports = { handleGenerateNewShortURL, findOneAndUpdate };
