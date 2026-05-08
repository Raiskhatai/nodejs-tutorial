const express = require("express");
const urlRoutes = require("./routes/url");
const app = express();
const PORT = 8000;

app.use(express.json());

app.use("/url", urlRoutes);

app.listen(PORT, () => console.log("server start"));
