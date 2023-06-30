import express from "express";
let router = express.Router();
import apiControllerr from "../controller/apiController";

const initAPIRoute = (app) => {
  //   app.METHOD(PATH, HANDLER);
  router.get("/users", apiControllerr.getAllUser); // method GET=>READ
  router.post("/create-user", apiControllerr.createUser); // method GET=>READ

  return app.use("/api/v1", router);
};
export default initAPIRoute;
