const express = require("express");
const router = express.Router();
const userModel = require("./../models/user.model");
router.get("/sign-in", function (req, res) {
  try {
    return res.render("vwAdmin/SignIn", {
      layout: false,
    });
  } catch (e) {
    return res.status(500).json(e);
  }
});

router.post("/sign-in", function (req, res) {
  try {
    const data = req.body;

    console.log(data);
    return res.redirect("/dashboard");
  } catch (e) {
    return res.status(500).json(e);
  }
});

router.get("/dashboard", function (req, res) {
  res.render("vwAdmin/dashboard", {
    layout: false,
    user: {
      username: "duc",
    },
  });
});

router.get("/sign-up", function (req, res) {
  try {
  } catch (e) {
    return res.status(500).json(e);
  }
});

router.get("/temp", function (req, res) {
  try {
  } catch (e) {
    return res.status(500).json(e);
  }
});

router.get("/api/users", async function (req, res) {
  try {
    const users = await userModel.all();
    console.log(users);
    res.json(users);
    return;
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;