const express = require("express");
const users = require("./MOCK_DATA.json");
const app = express();
const fs = require("fs");
const { json } = require("stream/consumers");
const { time } = require("console");
const PORT = 3000;

// routes
app.get("/api/users", (req, res) => {
  res.setHeader("myName", "shahrukh");
  console.log(req.headers); // headers are meta data isko req mey send get kar sakte hey or res mey set kar sakte . extra information req and res ke bare mey .
  return res.json(users);
});

app.get("/users", (req, res) => {
  const html = `
    <ul>
    ${users
      .map((user) => {
        return `<li>
        ${user.first_name}
        </li>`;
      })
      .join("")}
      </ul>
      `;
  res.send(html).join("");
});

/*

// agar hume .get , .patch, .delete 3 kaam hey to ya to 
// 3 alag-alag bana sakte ya feer 
// .route ya hum single bana sakte hey .

*/

// app.use middleware hey yeh function hote hey jo server ke res se pahle chalte hey function agar next() ho tab he aage kaam hoga warna ruk jayega data post nhi hoga na get hogi iska kaam hacker se bachne ke liye ya jo form se data a rha usko object banane ke liye kiya jata hey jese express.urlencoded yeh object bana deta form ke data ko or auto next karta .

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.use((req, res, next) => {
//   console.log("req 1");
//   fs.appendFile(
//     "log.txt",
//     `\ndate ${Date.now()} time ${new Date().toLocaleTimeString()} ${req.method} ${req.path} \n  `,
//     (req, res) => {},
//   );
//   next();
// });

// app.use((req, res, next) => {
//   console.log("req 2");
//   // return res.end("end");
//   next();
// });

// app.use((req, res, next) => {
//   console.log("req 2");
//   return res.end("end");
// });

// app.get("/api/users/:id", (req, res) => {
//   const id = Number(req.params.id);
//   const user = users.find((user) => user.id === id);
//   return res.json(user);
// });

app.patch("/api/users/:id", (req, res) => {
  // todo : edit the user with id
  return res.json({ status: "pending" });
});

app.delete("/app/users/:id", () => {
  // todo : delete the user with id
  return res.json({ status: "pending" });
});

// app
//   .route("/api/users/:id")
//   .get((req, res) => {
//     const id = req.params.id;
//     const user = users.find((user) => user.id === id);
//     return res.json(user);
//   })
//   .patch((req, res) => res.json({ status: "pending" }))
//   .delete((req, res) => res.json({ status: "pending" }));

app.post("/api/users", (req, res) => {
  // todo : create new user
  const body = req.body;
  users.push({ ...body, id: users.length + 1 });
  fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
    return res.status(201).json({ status: "sucess" }); // status 201 means res success full hey agar kuch or aaya matlab kuch mistake hue hey . .json means res mey hum json formate mey bhej rhey hey jo good prectice hey .
  });
});

app.listen(PORT, () => console.log("sever start"));
