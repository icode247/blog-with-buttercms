const butter = require("buttercms")(process.env.READ_API_TOKEN);

exports.getBlogs = (req, res) => {
 
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