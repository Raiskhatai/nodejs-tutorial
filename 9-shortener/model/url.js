const db = require("../config/database");

async function create(shortId, redirectURL, createdBy) {
  const result = await db.query(
    `insert into url(shortId,redirectURL,visitHistory,createdBy) values(?,?,?,?);`,
    [
      shortId,
      redirectURL,
      JSON.stringify({ timestamp: new Date().toLocaleString() }),
      createdBy,
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
  return result[0];
}

async function getSingleValue(shortId) {
  const [result] = await db.query(`select * from url where shortId=?`, [
    shortId,
  ]);
  return result[0];
}

async function getAllValue() {
  const [result] = await db.query(`select * from url`);
  return result;
}

async function getUrlByUser(createdBy) {
  const [result] = await db.query(`select * from url where createdBy=?`, [
    createdBy,
  ]);

  return result;
}

module.exports = {
  create,
  findAndUpdate,
  getAllValue,
  getSingleValue,
  getUrlByUser,
};
