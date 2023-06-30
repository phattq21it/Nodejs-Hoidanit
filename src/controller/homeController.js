import pool from "../configs/connectDatabases";
import multer from "multer";

let getHomepage = async (req, res) => {
  //logic
  const [rows, fields] = await pool.execute("SELECT * FROM `user` ");
  return res.render("index.ejs", { dataUser: rows });
};
let getAboutpage = (req, res) => {
  //logic
  return res.send("hihihi");
};
let uploadFile = async (req, res) => {
  //logic
  return res.render("uploadFile.ejs");
};

let uploadProfilePic = async (req, res) => {
  // 'profile_pic' is the name of our file input field in the HTML form

  // req.file contains information of uploaded file
  // req.body contains information of text fields, if there were any

  if (req.fileValidationError) {
    return res.send(req.fileValidationError);
  } else if (!req.file) {
    return res.send("Please select an image to upload");
  }

  // Display uploaded image for user validation
  res.send();
};
let handleUploadMultipleFiles = async (req, res) => {
  if (req.fileValidationError) {
    return res.send(req.fileValidationError);
  } else if (!req.files) {
    return res.send("Please select an image to upload");
  }

  let result = "You have uploaded these images: <hr />";
  const files = req.files;
  let index, len;

  // Loop through all the uploaded images and display them on frontend
  for (index = 0, len = files.length; index < len; ++index) {
    result += `<img src="/image/${files[index].filename}" width="300" style="margin-right: 20px;">`;
  }
  result += '<hr/><a href="/upload">Upload more images</a>';
  res.send(result);
};

let updateUser = async (req, res) => {
  let { name, address, age, id } = req.body;

  console.log(name, address, age);
  //destructuring user

  let [user] = await pool.execute(
    " UPDATE user SET name = ?, address = ? ,age = ? WHERE id = ?",
    [name, address, age, id]
  );
  return res.redirect("/");
};
let editUser = async (req, res) => {
  let userId = req.params.userId;
  //destructuring user
  let [user] = await pool.execute("select * from user where id = ?", [userId]);
  return res.render("updateUser.ejs", { dataUserUp: user[0] });
};
let deleteUser = async (req, res) => {
  let userId = req.body.userId;

  await pool.execute("delete from user where id = ?", [userId]);
  //logic
  return res.redirect("/");
};
let createNewUser = async (req, res) => {
  let { name, address, age } = req.body;
  await pool.execute("insert into `user` (name,address,age) value (?,?,?)", [
    name,
    address,
    age,
  ]);
  //logic
  return res.redirect("back");
};
let getDetailPage = async (req, res) => {
  let userId = req.params.id;
  let [user] = await pool.execute("select * from `user` where `id` =?", [
    userId,
  ]);
  //logic
  return res.send(JSON.stringify(user[0]));
};
module.exports = {
  getHomepage,
  getAboutpage,
  getDetailPage,
  createNewUser,
  deleteUser,
  editUser,
  updateUser,
  uploadFile,
  uploadProfilePic,
  handleUploadMultipleFiles,
};
