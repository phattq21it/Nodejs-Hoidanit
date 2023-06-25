import pool from "../configs/connectDatabases";

let getHomepage = async (req, res) => {
  //logic
  const [rows, fields] = await pool.execute("SELECT * FROM `user` ");
  return res.render("index.ejs", { dataUser: rows });
};
let getAboutpage = (req, res) => {
  //logic
  return res.send("hihihi");
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
};
