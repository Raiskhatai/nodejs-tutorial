// app - server banana center of all.

const express = require("express");
const app = express();
const userRoutes = require("./routes/userRoutes");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", userRoutes);

app.listen(4000, () => {
  console.log("server running on port : 4000");
});
