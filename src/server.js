import configViewEngine from "./configs/viewEngine";
import initWebRoute from "./route/web";
import express from "express";
import initAPIRoute from "./route/api";

const multer = require("multer");

require("dotenv").config();
const morgan = require("morgan");
const port = process.env.PORT || 8080;
// const path = require("path");
const app = express();
app.use((req, res, next) => {
  //check => return res.send()
  console.log(">>> run into my middleware");
  console.log(req.method);
  next();
});
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

//setup view engine
configViewEngine(app);

//init webroute
initWebRoute(app);
initAPIRoute(app);

app.use(morgan("combined"));
app.use((req, res) => {
  return res.render("404.ejs");
});
//127.0.0.1- localhost

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
