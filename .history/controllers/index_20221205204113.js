const butter = require("buttercms")(process.env.READ_API_TOKEN);

exports.getBlogs = (req, res) => {
  butter.post.list({
    .then(function (resp) {
      console.log(resp.data.data)
      res.render("index", { blog:resp.data.data  });
    })
    .catch(function (resp) {
      console.log(resp);
    });
};

exports.createBlog = async (req, res) => {
  try {
    const blog = await axios
      .post(
        "https://api.buttercms.com/v2/content/",
        {
          key: "blog",
          status: "published",
          fields: [
            {
              title: req.body.title,
              description: req.body.description,
              content: req.body.content,
              coverimage: req.body.coverImage,
            },
          ],
        },
        {
          headers: {
            Authorization: `Token ${process.env.WRITE_API_TOKEN}`,
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => res.data);
    res.status(200).json({ msg: "blog created" });
  } catch (err) {
    res.status(500).json({ error: "Error" });
  }
};
