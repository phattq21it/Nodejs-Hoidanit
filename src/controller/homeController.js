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
};
