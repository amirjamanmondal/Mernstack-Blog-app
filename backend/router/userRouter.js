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
const GetOwnBlogs = require("../controllers/blogPost/GetOwnBlogs.js");

const GetComment = require("../controllers/comment/GetComment.js");
const GetOneBlog = require("../controllers/blogPost/GetOneBlog.js");

const FindUser = require("../controllers/user/FindUser.js");
const GetAllUsers = require("../controllers/user/GetAllUsers.js");
const FindUserByName = require("../controllers/user/FindUserByName.js");
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

// fetch loged user info
router.get("/", isAuthenticated, GetUser);

// post authenticated blog
router.post("/blog", isAuthenticated, CreateBlog);

// get all blogs from database
router.get("/blog", isAuthenticated, GetBlogs);

// get own blog of user
router.get("/user/blog/:id", isAuthenticated, GetOwnBlogs);

// fetch one blog by blog id
router.get("/blog/:id", isAuthenticated, GetOneBlog);

// update blog by authentic user and its own
router.patch("/blog/:id", isAuthenticated, UpdateBlog);

// delete blogs
router.delete("/blog/:id", isAuthenticated, DeleteBlog);

// post comment on the blog authentic user
router.post("/comment/:id", isAuthenticated, PostComment);

// logout user
router.get("/logout", Logout);

// get all comment
router.get("/comment/:post", GetComment);

// find user by id
router.get("/blog/commenter/:id", isAuthenticated, FindUser);

router.get("/:id", isAuthenticated, FindUser);
router.get("/name/:name", isAuthenticated, FindUserByName);
// fetch all user that is in the db
router.get("/user/all", isAuthenticated, GetAllUsers);

module.exports = router;
