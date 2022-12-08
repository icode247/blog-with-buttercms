const router = require("express").Router();
const { getBlogs, createBlog } = require("../controllers");

router.route("/blogs").get(getBlogs).get(createBlog);

module.exports = router;
