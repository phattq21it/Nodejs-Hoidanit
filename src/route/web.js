import express from "express";
import homeController from "../controller/homeController";
let router = express.Router();

const initWebRoute = (app) => {
  //   app.METHOD(PATH, HANDLER);
  router.get("/", homeController.getHomepage);
  router.get("/about", homeController.getAboutpage);
  return app.use("/", router);
};
export default initWebRoute;
