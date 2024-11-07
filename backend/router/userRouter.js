const express = require("express");
const Signup = require("../controllers/user/Signup.js");
const passport = require("passport");
const isAuthenticated = require("../middleware/AuthUser.js");
const GetUser = require("../controllers/user/GetUser.js");
const Logout = require("../controllers/user/Logout.js");
const CreateBlog = require("../controllers/blogPost/createBlog.js");
const router = express.Router();

router.post("/signup", Signup);

router.get("/", (req, res) => {
  res.send("hello world");
});

router.post(
  "/login",
  passport.authenticate("local", {
    successMessage: "Login succesfull",
    failureMessage: "something went wrong",
  }),
  (req, res) => {
    res.status(200).json({ message: "login successful" });
  }
);

router.get("/dashboard", isAuthenticated, GetUser);

router.post("/blog", isAuthenticated, CreateBlog);

// router.get("/logout", Logout);

module.exports = router;
