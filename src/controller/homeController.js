import connection from "../configs/connectDatabases";

let getHomepage = (req, res) => {
  let data = [];
  connection.query("SELECT * FROM `user`", function (err, results, fields) {
    console.log(">>check mysql");
    console.log(results); // results contains rows returned by server
    results.map((row) => {
      data.push({
        id: row.id,
        name: row.name,
        address: row.address,
        age: row.age,
      });
    });
    return res.render("index.ejs", { dataUser: JSON.stringify(data) });
  });
  //logic
};
let getAboutpage = (req, res) => {
  //logic
  return res.send("hihihi");
};
module.exports = {
  getHomepage,
  getAboutpage,
};
