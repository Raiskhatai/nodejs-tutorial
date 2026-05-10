const express = require("express");
const urlRoutes = require("./routes/url");
const { getAllValue } = require("./model/url");
const staticRouter = require("./routes/staticRouter");
const path = require("path");
// const router = require("./routes/url");
const app = express();
const PORT = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use("/url", urlRoutes);
app.use("/", staticRouter);

// app.use("/", urlRoutes);

app.listen(PORT, () => console.log("server start"));
