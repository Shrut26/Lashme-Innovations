const express = require("express");
const router = express.Router();
const signup = require("../controllers/create_user");
const login = require("../controllers/login");
const followers = require("../controllers/followers");
const following = require("../controllers/following");
const follow = require("../controllers/follow");
const unfollow = require("../controllers/unfollow");

router.post("/", signup);
router.post("/login", login);
router.get("/:id/followers", followers);
router.get("/:id/following", following);
router.put("/:id/follow", follow);
router.put("/:id/unfollow", unfollow);

module.exports = router;
