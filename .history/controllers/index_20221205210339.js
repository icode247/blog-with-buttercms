const butter = require("buttercms")(process.env.READ_API_TOKEN);

exports.getBlogs = (req, res) => {
  butter.post.retrieve("example-post")
    .then(function(resp) {
        console.log(resp.data)
    })
    .catch(function(resp) {
        console.log(resp)
    });
};



expor