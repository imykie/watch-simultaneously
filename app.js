const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Simultaneouly!");
});

module.exports = app;
