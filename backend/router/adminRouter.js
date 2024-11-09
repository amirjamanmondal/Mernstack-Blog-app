const express = require("express");
const passport = require("passport");
const Signup = require("../controllers/admin/Signup");
const isAuthenticated = require("../middleware/AuthUser");
const GetInfo = require("../controllers/admin/GetInfo");
const GetAllPost = require("../controllers/admin/GetAllPost");
const GetAllUsers = require("../controllers/admin/GetAllUsers");
const Logout = require("../controllers/admin/Logout");
const GetBlogOfUser = require("../controllers/admin/GetBlogOfUser");

const adminRouter = express.Router();

adminRouter.post("/signup", Signup);

adminRouter.post(
  "/login",
  passport.authenticate("local", {
    successMessage: "Login succesfull",
    failureMessage: "something went wrong",
  }),
  (req, res) => {
    res.status(200).json({ message: "login successful" });
  }
);

adminRouter.get("/info", isAuthenticated, GetInfo);

adminRouter.post("/blog", isAuthenticated, GetAllPost);

adminRouter.get("/users", isAuthenticated, GetAllUsers);
adminRouter.get("/user/blog/:id", isAuthenticated, GetBlogOfUser);

adminRouter.get("/logout", Logout);

module.exports = adminRouter;
