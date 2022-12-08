const express = require("express");
const ejs = require("ejs");
require("dotenv").config();

const app = express();
app.set("view engine", "ejs");
app.use(express.json());
app.use("/static", express.static("public"));

app.get("blog", (req, res) => {
  butter.post
    .list()
    .then(function (resp) {
      res.render("index.ejs", resp.data);
    })
    .catch(function (resp) {
      console.log(resp);
    });
});

const PORT = 4002;
app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});


📦buttercms-blog
 ┣ 📂public
 ┃ ┗ 📜index.js
 ┣ 📂views
 ┃ ┣ 📜blog-single.ejs
 ┃ ┣ 📜header.ejs
 ┃ ┗ 📜index.ejs
 ┣ 📜.env
 ┣ 📜index.js
 ┣ 📜package-lock.json
 ┗ 📜package.json