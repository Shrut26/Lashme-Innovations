const mongoose = require("mongoose");
const User = require("../models/user");

const follow = (req, res, next) => {
  User.findByIdAndUpdate(
    req.body.followId,
    {
      $push: { followers: req.params.id },
    },
    {
      new: true,
    },
    (err, result) => {
      if (err) {
        return res.status(422).json({ error: err });
      }
      User.findByIdAndUpdate(
        req.params.id,
        {
          $push: { following: req.body.followId },
        },
        { new: true }
      )
        .select("-password")
        .then((result) => {
          res.json(result);
        })
        .catch((err) => {
          return res.status(422).json({ error: err });
        });
    }
  );
};

module.exports = follow;
