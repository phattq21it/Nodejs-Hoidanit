import configViewEngine from "./configs/viewEngine";

require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const port = process.env.PORT || 8080;
// const path = require("path");
const app = express();

configViewEngine(app);

app.use(morgan("combined"));
app.get("/", (req, res) => {
  res.render("index.ejs");
});

//127.0.0.1- localhost

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
