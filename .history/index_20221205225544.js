const express = require("express");
const ejs = require("ejs");
require("dotenv").config();
var butter = require('buttercms')("your_api_token");

const app = express();
app.set("view engine", "ejs");
app.use(express.json());

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
