const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

// router.get("/register", async (req, res) => {
//   try {
//     const newUser = new User({
//       username: "prateek",
//       email: "prateeksdr4@gmail.com",
//       password: "123456789",
//     });
//     const user = await newUser.save();
//     res.status(200).json(user);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

router.post("/register", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    !user && res.status(404).json("user not found");
    // {
    //   !user
    //     ? res.status(404).json("user not found")
    //     : res.status(200).json("user found");
    // }

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    !validPassword &&
      res.status(400).json("password is incorrect, please try again");

    res.status(200).json(user);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;