const express = require("express");
const path = require("path");

const app = express();

const usersRoutes = require("./users");

app.use(express.static(path.join(__dirname, "views")));

app.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "./", "views", "index.html"));
});

app.use(usersRoutes);

app.listen(3000);
