const Blog = require("../models/blog");

const getAllBlog = async (req, res, next) => {
  let blogs;
  try {
    blogs = await Blog.find();
  } catch (error) {
    return console.log(error);
  }

  if (!blogs) {
    return res.status(404).json({ message: "No blog found" });
  }
  return res.status(201).json({ blogs });
};

module.exports = getAllBlog;
