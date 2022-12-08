const butter = require("buttercms")(process.env.READ_API_TOKEN);

exports.getBlogs = (req, res) => {
  butter.blop.list({
    "page": 1,
    "page_size": 10,
    "exclude_body": false,
    "author_slug": 'test-api',
    "category_slug": 'test-category',
    "tag_slug": 'test-tag'
})
 .then(function(resp) {
   console.log(resp.data)
 }).catch(function(resp) {
   console.log(resp)
 });
};



exports.getBlog = (req,res)=>{
  const slug = req.params.slug;

  butter.post.retrieve(slug)
    .then(function(resp) {
        res.render('blog-single.ejs', resp.data.data)
    })
    .catch(function(resp) {
        console.log(resp)
    });
}