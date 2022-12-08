const butter = require("buttercms")(process.env.READ_API_TOKEN);

exports.getBlogs = (req, res) => {
  butter.post.list()
 .then(function(resp) {
    res.render('index.ejs', resp.data)
 }).catch(function(resp) {
   console.log(resp)
 });
};

exports.getBlog = (req,res)=>{
  const slug = req.params.slug;

  butter.post.retrieve(slug)
    .then(function(resp) {
      console.log(resp.data.data)
        res.render('blog-single.ejs', resp.data)
    })
    .catch(function(resp) {
        console.log(resp)
    });
}