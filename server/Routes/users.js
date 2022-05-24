const User = require("../models/User");
const router = require("express").Router();
const bcrypt = require("bcrypt");

router.get("/", async (req, res) => {
  try {
    const userId = req.query.userId;
    const username = req.query.username;
    const user = userId
      ? await User.findById(userId)
      : await User.findOne({ username: username });
    {
      user
        ? res.status(200).json(user)
        : res.status(404).json("not found user");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/friends/:userId", async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    const connections = await Promise.all(
      user.followings.map((connectionId) => {
        return User.findById(connectionId);
      })
    );
    let connectionList = [];
    connections.map((connection) => {
      const { _id, username, profilePicture } = connection;
      connectionList.push({ _id, username, profilePicture });
    });
    res.status(200).json(connectionList);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/:id", async (req, res) => {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    if (req.body.password) {
      try {
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
      } catch (err) {
        return res.status(500).json(err);
      }
    }
    try {
      const user = await User.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });
      res.status(200).json("Account has been updated");
    } catch (err) {
      return res.status(500).json("something is wrong");
    }
  } else {
    return res.status(403).json("You can update only your account");
  }
});

router.put("/:id/follow", async (req, res) => {
  if (req.body.userId !== req.params.id) {
    try {
      const user = await User.findById(req.params.id);
      const userGoingToFollow = await User.findById(req.body.userId);
      if (!user.followers.includes(req.body.userId)) {
        await user.updateOne({ $push: { followers: req.body.userId } });
        await userGoingToFollow.updateOne({
          $push: { followings: req.body.userId },
        });
        res.status(200).json("user has been followed by userGoingToFollow");
      } else {
        res.status(403).json("you already follow this user");
      }
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("you can not follow yourself");
  }
});

router.put("/:id/unfollow", async (req, res) => {
  if (req.body.userId !== req.params.id) {
    try {
      const user = await User.findById(req.params.id);
      const userGoingToFollow = await User.findById(req.body.userId);
      if (user.followers.includes(req.body.userId)) {
        await user.updateOne({ $pull: { followers: req.body.userId } });
        await userGoingToFollow.updateOne({
          $pull: { followings: req.body.userId },
        });
        res.status(200).json("user has been unfollowed by userGoingToFollow");
      } else {
        res.status(403).json("you don't follow this user");
      }
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("you cannot unfollow yourself");
  }
});

router.delete("/:id", async (req, res) => {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    try {
      const user = await User.findByIdAndDelete(req.params.id, {
        $set: req.body,
      });
      res.status(200).json("Account has been deleted");
    } catch (err) {
      return res.status(500).json("something is wrong");
    }
  } else {
    return res.status(403).json("You can update only your account");
  }
});

module.exports = router;
