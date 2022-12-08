const router = require("express").Router();
const { getBlogs, createBlog } = require("../controllers");

router.route("/blogs").get(getBlogs).ge(createBlog);

module.exports = router;
