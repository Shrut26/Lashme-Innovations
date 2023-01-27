const express = require("express");
const router = express.Router();

const getAllBlog = require("../controllers/getAllBlogs");
const addBlog = require("../controllers/addBlog");

router.get("/", getAllBlog);
router.post("/add", addBlog);
module.exports = router;
