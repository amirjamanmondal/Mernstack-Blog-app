const express = require("express");
const passport = require("passport");
const Signup = require("../controllers/admin/Signup");
const isAuthenticated = require("../middleware/AuthUser");
const GetInfo = require("../controllers/admin/GetInfo");
const GetAllPost = require("../controllers/admin/GetAllPost");
const GetAllUsers = require("../controllers/admin/GetAllUsers");
const Logout = require("../controllers/admin/Logout");
const GetBlogOfUser = require("../controllers/admin/GetBlogOfUser");
const Admin = require("../models/Admin");
const bcrypt = require("bcrypt");

const adminRouter = express.Router();

adminRouter.post("/signup", Signup);

adminRouter.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password)
      return res.status(404).json({ message: "all fields are required" });

    const user = await Admin.findOne({ email: email });

    if (!user)
      return res.status(404).json({ message: "User not found in database" });

    if (!(await bcrypt.compare(password, user.password || " ")))
      return res.status(401).json({ message: "password is incorrect" });
    res.status(200).cookie("token", user._id, {
      expires: new Date(Date.now() + 3600000),
      httpOnly: true,
      secure: true,
      sameSite: "Strict",
    });
    res.status(200).json({ message: "login successful", user });
  } catch (error) {
    res.status(500).json(error.message);
  }
});

adminRouter.get("/info", isAuthenticated, GetInfo);

adminRouter.post("/blog", isAuthenticated, GetAllPost);

adminRouter.get("/users", isAuthenticated, GetAllUsers);
adminRouter.get("/user/blog/:id", isAuthenticated, GetBlogOfUser);

adminRouter.get("/logout", Logout);

module.exports = adminRouter;
