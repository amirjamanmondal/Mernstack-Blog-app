const express = require("express");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const Signup = require("../controllers/user/Signup.js");
const isAuthenticated = require("../middleware/AuthUser.js");
const GetUser = require("../controllers/user/GetUser.js");
const Logout = require("../controllers/user/Logout.js");
const CreateBlog = require("../controllers/blogPost/createBlog.js");
const UpdateBlog = require("../controllers/blogPost/updateBlog.js");
const GetBlogs = require("../controllers/blogPost/getBlogs.js");
const DeleteBlog = require("../controllers/blogPost/deleteBlog.js");
const PostComment = require("../controllers/comment/postComment.js");
const GetBlogByCategory = require("../controllers/blogPost/filterBlogByCategory.js");
const GetOwnBlogs = require("../controllers/blogPost/GetOwnBlogs.js");
const User = require("../models/User.js");
const GetComment = require("../controllers/comment/GetComment.js");
const GetOneBlog = require("../controllers/blogPost/GetOneBlog.js");
const GetCommentsOfPost = require("../controllers/comment/GetCommentsOfPost.js");
const FindUser = require("../controllers/user/FindUser.js");
const router = express.Router();

router.post("/signup", Signup);

router.post(
  "/login",
  passport.authenticate("local", {
    successMessage: "Login successful",
    failureMessage: "Something went wrong",
  }),
  (req, res) => {
    const user = req.user;
    const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, {
      expiresIn: "5d",
    });

    res.status(200).json({ message: "Login successful", user, token });
  }
);

router.get("/", isAuthenticated, GetUser);

router.post("/blog", isAuthenticated, CreateBlog);

router.get("/blog", isAuthenticated, GetBlogs);
router.get("/user/blog", isAuthenticated, GetOwnBlogs);
router.patch("/blog/:id", isAuthenticated, UpdateBlog);
router.delete("/blog/:id", isAuthenticated, DeleteBlog);
router.post("/comment/:id", isAuthenticated, PostComment);
router.get("/blog/category", isAuthenticated, GetBlogByCategory);
router.get("/logout", Logout);
router.get("/comment/:post", GetComment);
router.get("/blog/:id", isAuthenticated, GetOneBlog);
router.get("/blog/:ids", isAuthenticated, GetCommentsOfPost);
router.get("/blog/commenter/:id", isAuthenticated, FindUser);

module.exports = router;
