const User = require("../models/user");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const signup = async (req, res, next) => {
  const { name, email, password } = req.body;
  let existingUser;

  try {
    existingUser = await User.findOne({ email });
  } catch (error) {
    return console.log(error);
  }

  if (existingUser) {
    return res.status(400).json({ message: "User pre-exists" });
  }
  const hashedPassword = bcrypt.hashSync(password);
  const user = new User({
    name,
    email,
    password: hashedPassword,
    blogs: [],
    followers: [],
    following: [],
  });

  try {
    user.save();
  } catch (error) {
    return console.log(error);
  }
  return res.status(201).json({ user });
};

module.exports = signup;
