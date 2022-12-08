const router = require("express").Router();
const { getBlogs, createBlog } = require("../controllers");

router.route("/blogs").get(getBlogs).(createBlog);

module.exports = router;
