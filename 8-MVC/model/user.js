// model - database ki queries idhar rahegi .
// jese all user chahiye to .
// insert karne ke liye user
// update karne ke liye kisi user ko.
// delete karne ke liye user ko.

const db = require("../config/database");

async function getAllUsers() {
  try {
    const [users] = await db.query("select * from nodetable");
    return users;
  } catch (err) {
    console.log("Error" + err);
  }
}

async function addUser(name) {
  try {
    const [val] = await db.query(`insert into nodetable(name) values(?)`, [
      name,
    ]);
    return val;
  } catch (err) {
    console.log("error");
  }
}

async function updateUser(name, id) {
  try {
    const [val] = await db.query(
      `
      update nodetable 
      set name=?
      where id=?
      `,
      [name, id],
    );
    return val;
  } catch (err) {
    console.log("update error");
  }
}

async function deleteUser(id) {
  try {
    const [val] = await db.query(`delete from nodetable where id=?`, [id]);
    return val;
  } catch (err) {
    console.log("deleted error");
  }
}

module.exports = { getAllUsers, addUser, updateUser, deleteUser };
