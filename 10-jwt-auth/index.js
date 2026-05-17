const express = require("express");
const { connectToMongoDB } = require("./connect");
const app = express();
const URL = require("./models/url");
const port = 8000;
const path = require("path");
const cookieParser = require("cookie-parser");

const urlRouter = require("./routes/url");
const staticRouter = require("./routes/staticRouter");
const userRouter = require("./routes/user");
const { restrictToLoggedinUserOnly, checkAuth } = require("./middleware/auth");

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.json()); // params data ke liye
app.use(express.urlencoded({ extended: false })); // form data ke liey
app.use(cookieParser()); // cookie se stored id fetch karne ke liye

connectToMongoDB("mongodb://localhost:27017/short-url"); // short-url is database name

app.use("/url", restrictToLoggedinUserOnly, urlRouter);
app.use("/user", userRouter);
app.use("/",checkAuth, staticRouter);

app.get("/test", async (req, res) => {
  const allUrls = await URL.find({});
  return res.render("home", {
    urls: allUrls,
  });
});

app.get("/:shortId", async (req, res) => {
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    {
      shortId,
    },
    { $push: { visitHistory: { timeStamp: Date.now() } } },
  );
  if (!entry) return res.status(400).send("url not found");
  res.redirect(entry.redirectURL);
});

app.listen(port, () => console.log("server started"));
