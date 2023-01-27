const User = require("../models/user");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const login = async (req, res, next) => {
  const { email, password } = req.body;
  let existingUser;
  try {
    existingUser = await User.findOne({ email });
  } catch (error) {
    return console.log(error);
  }

  if (!existingUser) {
    return res.status(404).json({ message: "User not found" });
  }

  const isCorrectPassword = bcrypt.compareSync(password, existingUser.password);
  if (!isCorrectPassword) {
    return res.status(400).json({ message: "Incorrect Crediatials" });
  }
  return res.status(201).json({ existingUser, message: "Successful Login" });
};

module.exports = login;
