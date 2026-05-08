const db = require("../config/database");

async function create(shortId, redirectURL, visitHistory) {
  const result = await db.query(
    `insert into url(shortId,redirectURL,visitHistory) values(?,?,?);`,
    [shortId, redirectURL, visitHistory],
  );
}

module.exports = { create };
