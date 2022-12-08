const router = require("express").Router();
const { getBlogs, getBlog } = require("../controllers");

router.route("/blogs").get(getBlogs)
router.route('/blog')

module.exports = router;
