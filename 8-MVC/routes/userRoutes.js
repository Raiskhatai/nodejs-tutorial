// routers - konsi route par konsi controller function chalana hey .

const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");

router.get("/", userController.getUsers);
router.post("/", userController.userCreate);
router.put("/", userController.userUpdate);
router.delete("/", userController.userDelete);

module.exports = router;
