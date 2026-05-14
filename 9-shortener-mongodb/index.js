const express = require("express");
const urlRouter = require("./routes/url");
const { connectToMongoDB } = require("./connect");
const app = express();
const URL = require("./models/url");
const port = 8000;

app.use(express.json());

connectToMongoDB("mongodb://localhost:27017/short-url"); // short-url is database name

app.use("/url", urlRouter);

app.get("/:shortId", async (req, res) => {
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    {
      shortId,
    },
    { $push: { visitHistory: { timeStamp: Date.now() } } },
  );
  res.redirect(entry.redirectURL);
});

app.listen(port, () => console.log("server started"));
