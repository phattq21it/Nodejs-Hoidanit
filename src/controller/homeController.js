let getHomepage = (req, res) => {
  //logic
  return res.render("index.ejs");
};
let getAboutpage = (req, res) => {
  //logic
  return res.send("hihihi");
};
module.exports = {
  getHomepage,
  getAboutpage,
};
