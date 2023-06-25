import configViewEngine from "./configs/viewEngine";
import initWebRoute from "./route/web";
import express from "express";
import connection from "./configs/connectDatabases";

require("dotenv").config();
const morgan = require("morgan");
const port = process.env.PORT || 8080;
// const path = require("path");
const app = express();

//setup view engine
configViewEngine(app);

//init webroute
initWebRoute(app);

app.use(morgan("combined"));

//127.0.0.1- localhost

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
