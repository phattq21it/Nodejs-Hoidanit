import express from "express";
var bodyParser = require("body-parser");
import homeController from "../controller/homeController";
let router = express.Router();

const initWebRoute = (app) => {
  //   app.METHOD(PATH, HANDLER);
  router.get("/", homeController.getHomepage);
  router.get("/detail/user/:id", homeController.getDetailPage);
  router.post("/", homeController.createNewUser);
  router.get("/about", homeController.getAboutpage);
  return app.use("/", router);
};
export default initWebRoute;
