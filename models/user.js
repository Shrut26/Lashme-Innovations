const mongoose = require("mongoose");

const userModel = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  blogs: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Blog",
      required: true,
    },
  ],

  followers: [
    {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
  ],

  following: [
    {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
  ],
});

const User = mongoose.model("User", userModel);
module.exports = User;
