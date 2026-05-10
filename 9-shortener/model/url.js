const db = require("../config/database");

async function create(shortId, redirectURL, visitHistory) {
  const result = await db.query(
    `insert into url(shortId,redirectURL,visitHistory) values(?,?,?);`,
    [
      shortId,
      redirectURL,
      JSON.stringify({ timestamp: new Date().toLocaleString() }),
    ],
  );
}

async function findAndUpdate(shortId) {
  await db.query(
    `update url 
    set visitHistory= ?
    where shortId = ?;`,
    [
      JSON.stringify({
        timestamp: new Date().toLocaleString(),
      }),
      shortId,
    ],
  );

  const [result] = await db.query(
    `
    select * from url where shortId=?;
    `,
    [shortId],
  );
  return result;
}

async function getAllValue() {
  const [result] = await db.query(`select * from url`);
  return result;
}

module.exports = { create, findAndUpdate, getAllValue };
