const mysql = require("mysql2/promise");
const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

let db = null;

async function main() {
  db = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "15302486",
    database: "nodesql_prec",
  });

  console.log("sql connected");
}
main();

app.get("/", async (req, res) => {
  try {
    let [val] = await db.query("select * from nodetable");
    res.json(val);
  } catch (err) {
    console.log("Error coming", err);
  }
});

app.post("/", async (req, res) => {
  try {
    let { name } = req.body;
    console.log(req.body);
    await db.query("insert into nodetable(name) values(?)", [name]);
    res.send("post name");
  } catch (err) {
    console.log("Post Error coming", err);
  }
});

app.put("/", async (req, res) => {
  try {
    const { name, id } = req.body;
    console.log(req.body);
    await db.query(
      `update nodetable
    set name=?
    where id=?
    `,
      [name, id],
    );
    res.send("Update Successfully");
  } catch (err) {
    console.log("Update Error");
  }
});

app.delete("/", async (req, res) => {
  const { id } = req.body;
  try {
    await db.query(
      `
      delete from nodetable
      where id=?
      `,
      [id],
      res.send("User Deleted"),
    );
  } catch (err) {
    console.log("Delete Error");
  }
});

app.listen(3000, (req, res) => {
  console.log("server is ready");
});
