// const http = require("http");
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("hello from home page");
});

app.get("/about", (req, res) => {
  res.send(
    ` hello from about page and hi ${req.query.name} your age ${req.query.age}`,
  );
});

app.listen(3000, () => console.log("server start"));

// const myserver = http.createServer(app);
// myserver.listen(3000, () => console.log("server start"));
