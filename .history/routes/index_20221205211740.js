const router = require("express").Router();
const { getBlogs, getBlog } = require("../controllers");

router.route("/blogs")
.get(getBlogs).get(getBlog);

module.exports = router;
