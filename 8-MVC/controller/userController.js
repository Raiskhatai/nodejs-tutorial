// controller - function ke through queries ko use karna 
// routes ke sare function is file se jate hey.

const userModel = require("../model/user");

const getUsers = async (req, res) => {
  try {
    const users = await userModel.getAllUsers();
    res.json(users);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const userCreate = async (req, res) => {
  try {
    const { name } = req.body;
    await userModel.addUser(name);
    res.send("user added");
  } catch (err) {}
};

const userUpdate = async (req, res) => {
  try {
    const { name, id } = req.body;
    await userModel.updateUser(name, id);
    res.send("user updated");
  } catch (err) {
    console.log("userUpdate error");
  }
};

const userDelete = async (req, res) => {
  try {
    const { id } = req.body;
    await userModel.deleteUser(id);
    res.send("user deleted");
  } catch (err) {
    console.log("User deleted err");
  }
};

module.exports = { getUsers, userDelete, userUpdate, userCreate };
