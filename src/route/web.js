import express from "express";
var bodyParser = require("body-parser");
import homeController from "../controller/homeController";
let router = express.Router();
import multer from "multer";
import path from "path";

var appRoot = require("app-root-path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, appRoot + "/src/public/image/");
  },

  // By default, multer removes file extensions so let's add them back
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const imageFilter = function (req, file, cb) {
  // Accept images only
  if (!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {
    req.fileValidationError = "Only image files are allowed!";
    return cb(new Error("Only image files are allowed!"), false);
  }
  cb(null, true);
};

const upload = multer({ storage: storage, fileFilter: imageFilter });
let uploadMultipleFiles = multer({
  storage: storage,
  fileFilter: imageFilter,
}).array("multiple_images", 3);

const initWebRoute = (app) => {
  //   app.METHOD(PATH, HANDLER);
  router.get("/", homeController.getHomepage);
  router.get("/detail/user/:id", homeController.getDetailPage);
  router.post("/", homeController.createNewUser);
  router.post("/delete-user", homeController.deleteUser);
  router.post("/update-user", homeController.updateUser);
  router.post(
    "/upload-profile-pic",
    upload.single("profile_pic"),
    homeController.uploadProfilePic
  );
  router.post(
    "/upload-multiple-images",
    upload.array("multiple_images"),
    homeController.handleUploadMultipleFiles
  );
  router.get("/about", homeController.getAboutpage);
  router.get("/edit-user/:userId", homeController.editUser);
  router.get("/upload", homeController.uploadFile);
  return app.use("/", router);
};
export default initWebRoute;
