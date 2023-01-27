const express = require("express");
const User = require("../models/user");

const followering = async (req, res, next) => {
  try {
    const id = req.params.id;
    const user = await User.findById(id).select("following");
    return res.status(201).json(user);
  } catch (error) {
    return console.log(error);
  }
};

module.exports = followering;
