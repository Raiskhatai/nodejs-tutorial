const http = require("http");
const fs = require("fs");
const url = require("url");

const myserver = http.createServer((req, res) => {
  if (req.url === "/favicon.ico") return res.end();
  const log = `${Date.now()} : ${req.method} : ${req.url}:\n new req rec.\n`;
  const MyUrl = url.parse(req.url, true);
  console.log(MyUrl);

  fs.appendFile("log.txt", log, (err, data) => {
    // res.end("hello from server");

    switch (MyUrl.pathname) {
      case "/":
        if (req.method === "GET") return res.end("home page");
        break;
      case "/signup":
        if (req.method === "GET") res.end("this is a signup form");
        else if (req.method === "POST") {
          // db
          res.end("success");
        }
        break;

      case "/about":
        const usersearch = MyUrl.query.search_query;
        const username = MyUrl.query.name;
        res.end(`hi ${username} and you search ${usersearch} `);
        break;
      default:
        res.end("404 page not fount");
        break;
    }
  });
});

myserver.listen(3001, () => console.log("server started"));
