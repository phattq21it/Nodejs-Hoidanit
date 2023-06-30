import pool from "../configs/connectDatabases";
let getAllUser = async (req, res) => {
  const [rows, fields] = await pool.execute("SELECT * FROM `user` ");
  return res.status(200).json({
    message: "ok",
    data: rows,
  });
};
let createUser = async (req, res) => {
  return res.status(200).json({
    message: "ok",
  });
};
module.exports = {
  getAllUser,
  createUser,
};
