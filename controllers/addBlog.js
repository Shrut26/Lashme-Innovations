const mongoose = require("mongoose");
const Blog = require("../models/blog");
const User = require("../models/user");

const addBlog = async (req, res, next) => {
  const { title, description, image, user } = req.body;
  let existingUser;

  try {
    existingUser = await User.findById(user);
  } catch (error) {
    return console.log(error);
  }

  if (!existingUser) {
    return res.status(400).json({ message: "User doesn't found" });
  }
  const blog = new Blog({
    title,
    description,
    image,
    user,
  });

  try {
    const session = await mongoose.startSession();
    session.startTransaction();
    await blog.save({ session });
    existingUser.blogs.push(blog);
    await existingUser.save({ session });
    await session.commitTransaction();
  } catch (error) {
    return res.status(500).json({ message: error });
  }

  return res.status(201).json({ blog });
};

module.exports = addBlog;
