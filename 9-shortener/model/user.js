const db = require("../config/database");

async function create(name, email, password) {
  const timeAndDate = new Date().toLocaleString();
  await db.query(
    `insert into user(name,email,password,timestamp) values(?,?,?,?)`,
    [name, email, password, JSON.stringify({ timestamp: timeAndDate })],
  );
}

async function findOne(email, password) {
  const [result] = await db.query(
    `
        select * from user 
        where email=? and password=?
        limit 1;
        `,
    [email, password],
  );
  return result[0];
}

module.exports = { create, findOne };
