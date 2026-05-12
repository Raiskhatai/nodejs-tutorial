const express = require("express");
const { getAllValue } = require("./model/url");
const path = require("path");
const cookieParser = require("cookie-parser");
const { restrictToLoggedInUserOnly } = require("./middleware/auth");
const app = express();
const PORT = 8000;

// routes
const urlRoutes = require("./routes/url");
const staticRouter = require("./routes/staticRouter");
const userRouter = require("./routes/user");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use("/url", urlRoutes);
app.use("/", staticRouter);
app.use("/user", userRouter);

// app.use("/", urlRoutes);

app.listen(PORT, () => console.log("server start"));
