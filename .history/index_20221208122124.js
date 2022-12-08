const express = require("express");
const ejs = require("ejs");
require("dotenv").config();
const butter = require('buttercms')(process.env.READ_API_TOKEN);

const app = express();
app.set("view engine", "ejs");
app.use(express.json());
app.use('/static', express.static('public'))

app.get("/blogs", (req, res) => {
  butter.post
    .list()
    .then(function (resp) {
      res.render("index.ejs", resp.data);
    })
    .catch(function (resp) {
      console.log(resp);
    });
});

app.get('/blog/:slug', renderPost)

function renderPost(req, res) {
  var slug = req.params.slug;

  butter.post.retrieve(slug).then(function(resp) {
    res.render('post', {
      title: resp.data.data.title,
      post: resp.data.data,
      published: new Date(resp.data.data.published)
    })
  })
}
app.get('/blog/:slug', (req,res)=>{
  
})

const PORT = 4002;
app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
